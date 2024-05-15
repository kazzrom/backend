import initModels from "../../models/initModels.js";

const { GroupName } = initModels();

export default class GroupRepository {
  static async getGroupNames() {
    const groupNames = await GroupName.findAll();

    if (!groupNames) {
      return null;
    }

    return groupNames.map((groupName) => groupName.name);
  }
}
