import { COOKIE_SETTINGS } from "../../constants.js";
import AuthService from "../../services/Auth/Auth.js";
import ErrorsUtils from "../../utils/Errors.js";

class AuthController {
  static async signUp(req, res) {
    const { login, password, Curator, Group } = req.body;
    const { fingerprint } = req;

    try {
      const { accessToken, refreshToken, accessTokenExpiration } =
        await AuthService.signUp({
          login,
          password,
          fingerprint,
          curator: Curator,
          group: Group,
        });

      res.cookie("refreshToken", refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN);
      return res.status(200).json({ accessToken, accessTokenExpiration });
    } catch (err) {
      return ErrorsUtils.catchError(res, err);
    }
  }

  static async signIn(req, res) {
    const { login, password } = req.body;
    const { fingerprint } = req;

    try {
      const { accessToken, refreshToken, accessTokenExpiration } =
        await AuthService.signIn({
          login,
          password,
          fingerprint,
        });

      res.cookie("refreshToken", refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN);
      return res.status(200).json({ accessToken, accessTokenExpiration });
    } catch (err) {
      return ErrorsUtils.catchError(res, err);
    }
  }

  static async logOut(req, res) {
    const refreshToken = req.cookies.refreshToken;
    try {
      await AuthService.logOut(refreshToken);
      res.clearCookie("refreshToken");
      return res.sendStatus(200);
    } catch (err) {
      return ErrorsUtils.catchError(res, err);
    }
  }

  static async refresh(req, res) {
    const { fingerprint } = req;
    const currentRefreshToken = req.cookies.refreshToken;

    try {
      const { accessToken, refreshToken, accessTokenExpiration } =
        await AuthService.refresh({
          fingerprint,
          currentRefreshToken,
        });

      res.cookie("refreshToken", refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN);
      return res.status(200).json({ accessToken, accessTokenExpiration });
    } catch (err) {
      return ErrorsUtils.catchError(res, err);
    }
  }
}

export default AuthController;
