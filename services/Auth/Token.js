import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Forbidden, Unauthorized } from "../../utils/Errors.js";
import initModels from "../../models/initModels.js";

const { User, Curator, Group } = initModels();

dotenv.config();

class TokenService {
  static async generateAccessToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30m",
    });
  }

  static async generateRefreshToken(payload) {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "15d",
    });
  }

  static async checkAccess(req, _, next) {
    // Отсюда принимается header Authorization
    const authHeader = req.headers.authorization;

    // Здесь мы получаем access token от header'а
    const token = authHeader?.split(" ")?.[1];

    if (!token) {
      return next(new Unauthorized());
    }

    // А здесь сравниваем токены
    try {
      const user = await TokenService.verifyAccessToken(token);

      const curator = await Curator.findOne({
        where: { userId: user.id },
      });

      req.curator = curator;

      const group = await Group.findOne({
        where: { curatorId: curator.id },
      });

      req.groupId = group.id;
      req.group = group;
    } catch (error) {
      console.log(error);
      return next(new Forbidden(error));
    }

    next();
  }

  static async verifyAccessToken(accessToken) {
    return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  }

  static async verifyRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  }
}

export default TokenService;
