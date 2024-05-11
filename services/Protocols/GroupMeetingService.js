import GroupMeetingRepository from "../../repositories/Protocols/GroupMeetingRepository.js";

export default class GroupMeetingService {
  static async getProtocolsByGroupId(groupId) {
    const response = await GroupMeetingRepository.getProtocolsByGroupId(
      groupId
    );

    return response;
  }

  static async createProtocol({ data, groupId }) {
    const newProtocol = await GroupMeetingRepository.createProtocol({
      ...data,
      groupId,
    });

    return newProtocol;
  }

  static async updateProtocol({ id, data }) {
    await GroupMeetingRepository.updateProtocol({ id, data });
  }

  static async deleteProtocol(id) {
    await GroupMeetingRepository.deleteProtocol(id);
  }
}
