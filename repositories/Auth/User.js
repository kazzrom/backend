import sequelize from "../../config/connectingDB.js";
import initModels from "../../models/initModels.js";

const { User, Curator, Group, GroupName, GroupNumber } = initModels(sequelize);

class UserRepository {
  static async createUser({ login, hashedPassword, curator, group }) {
    const user = await User.create({
      login: login,
      password: hashedPassword,
    });

    const newCurator = await Curator.create(curator);

    await GroupNumber.findOrCreate({
      where: { number: group.groupNumber },
      defaults: { number: group.groupNumber },
    });

    const newGroup = await Group.create(group);

    await user.setCurator(newCurator);
    await newCurator.addGroup(newGroup);

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
