import HomeroomRepository from "../../repositories/Protocols/HomeroomRepository.js";

export default class HomeroomService {
  static async getProtocolsByGroupId(groupId) {
    const response = await HomeroomRepository.getProtocolsByGroupId(groupId);

    return response;
  }

  static async createProtocol(data) {
    await HomeroomRepository.createProtocol(data);
  }

  static async updateProtocol({ id, data }) {
    await HomeroomRepository.updateProtocol({ id, data });
  }

  static async deleteProtocol(id) {
    await HomeroomRepository.deleteProtocol(id);
  }
}
