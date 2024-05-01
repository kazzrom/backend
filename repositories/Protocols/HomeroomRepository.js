import initModels from "../../models/initModels.js";

const { Homeroom } = initModels();

export default class HomeroomRepository {
  static async getProtocolsByGroupId(groupId) {
    const protocols = await Homeroom.findAll({ where: { groupId } });

    if (!protocols) {
      return null;
    }

    return protocols;
  }

  static async createProtocol(data) {
    await Homeroom.create(data);
  }

  static async updateProtocol(id, data) {
    await Homeroom.update(data, { where: { id } });
  }

  static async deleteProtocol(id) {
    await Homeroom.destroy({ where: { id } });
  }
}
