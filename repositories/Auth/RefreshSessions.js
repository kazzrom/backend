import sequelize from "../../config/connectingDB.js";
import initModels from "../../models/initModels.js";

const { RefreshSession } = initModels(sequelize);

class RefreshSessionsRepository {
  static async createRefreshSession({ id, refreshToken, fingerprint }) {
    const session = await RefreshSession.create({
      userId: id,
      refreshToken: refreshToken,
      fingerprint: fingerprint.hash,
    });

    return session;
  }

  static async getRefreshSession(refreshToken) {
    const session = await RefreshSession.findOne({
      where: {
        refreshToken: refreshToken,
      },
    });

    if (!session) {
      return null;
    }

    return session;
  }

  static async deleteRefreshSession(refreshToken) {
    await RefreshSession.destroy({
      where: {
        refreshToken: refreshToken,
      },
    });
  }
}

export default RefreshSessionsRepository;
