import initModels from "../../models/initModels";

const { Homeroom } = initModels();

export default class HomeroomRepository {
  static async getProtocols(groupId) {
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
