import bcrypt from "bcryptjs";
import { ACCESS_TOKEN_EXPIRATION } from "../../constants.js";
import UserRepository from "../../repositories/Auth/User.js";
import RefreshSessionsRepository from "../../repositories/Auth/RefreshSessions.js";
import {
  Conflict,
  Forbidden,
  NotFound,
  Unauthorized,
} from "../../utils/Errors.js";
import TokenService from "./Token.js";

class AutoService {
  static async signUp({ login, password, fingerprint, curator, group }) {
    const userData = await UserRepository.getUserData(login);

    if (userData) {
      throw new Conflict("Пользователь с таким логином уже существует");
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const { id } = await UserRepository.createUser({ login, hashedPassword, curator, group });

    const payload = { id, login };

    const accessToken = await TokenService.generateAccessToken(payload);
    const refreshToken = await TokenService.generateRefreshToken(payload);

    await RefreshSessionsRepository.createRefreshSession({
      id,
      refreshToken,
      fingerprint,
    });

    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_EXPIRATION,
    };
  }

  static async signIn({ login, password, fingerprint }) {
    const userData = await UserRepository.getUserData(login);

    if (!userData) {
      throw new NotFound("Такого пользователя не существует!");
    }

    const IsPasswordValid = bcrypt.compareSync(password, userData.password);

    if (!IsPasswordValid) {
      throw new Unauthorized("Неверный логин или пароль");
    }

    // Может и пароль добавить для генерации
    const payload = { id: userData.id, login };

    const accessToken = await TokenService.generateAccessToken(payload);
    const refreshToken = await TokenService.generateRefreshToken(payload);

    await RefreshSessionsRepository.createRefreshSession({
      id: userData.id,
      refreshToken,
      fingerprint,
    });

    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_EXPIRATION,
    };
  }

  static async logOut(refreshToken) {
    await RefreshSessionsRepository.deleteRefreshSession(refreshToken);
  }

  static async refresh({ fingerprint, currentRefreshToken }) {
    if (!currentRefreshToken) {
      throw new Unauthorized();
    }

    const refreshSession = await RefreshSessionsRepository.getRefreshSession(
      currentRefreshToken
    );

    if (!refreshSession) {
      throw new Unauthorized();
    }

    if (refreshSession.fingerprint !== fingerprint.hash) {
      throw new Forbidden();
    }

    await RefreshSessionsRepository.deleteRefreshSession(currentRefreshToken);

    let payload;
    try {
      payload = await TokenService.verifyRefreshToken(currentRefreshToken);
      console.log("Это я verify этот ваш");
      console.log(payload);
    } catch (error) {
      throw new Forbidden(error);
    }

    const { id, login } = await UserRepository.getUserData(payload.login);
    const actualPayload = { id, login };

    const accessToken = await TokenService.generateAccessToken(actualPayload);
    const refreshToken = await TokenService.generateRefreshToken(actualPayload);

    await RefreshSessionsRepository.createRefreshSession({
      id,
      refreshToken,
      fingerprint,
    });

    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_EXPIRATION,
    };
  }
}

export default AutoService;
