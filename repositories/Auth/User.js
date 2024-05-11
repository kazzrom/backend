import sequelize from "../../config/connectingDB.js";
import initModels from "../../models/initModels.js";

const { User } = initModels(sequelize);

class UserRepository {
  static async createUser({ login, hashedPassword }) {
    const user = await User.create({
      login: login,
      password: hashedPassword,
    });

    return user;
  }

  static async getUserData(login) {
    const response = await User.findOne({
      where: {
        login: login,
      },
    });

    if (!response) {
      return null;
    }

    return response;
  }
}

export default UserRepository;
