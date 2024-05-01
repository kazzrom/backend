import ParentMeetingRepository from "../../repositories/Protocols/ParentMeetingRepository.js";

export default class ParentMeetingService {
  static async getProtocolsByGroupId(groupId) {
    const response = await ParentMeetingRepository.getProtocolsByGroupId(
      groupId
    );

    return response;
  }

  static async createProtocol(data) {
    const { theme, meetingDate, content, groupId, parentIds } = data;

    await ParentMeetingRepository.createProtocol({
      protocol: { theme, meetingDate, content, groupId },
      parentIds,
    });
  }

  static async updateProtocol({ id, data }) {
    const { theme, meetingDate, content, parentIds } = data;

    await ParentMeetingRepository.updateProtocol({
      id,
      data: { theme, meetingDate, content },
      parentIds,
    });
  }

  static async deleteProtocol(id) {
    await ParentMeetingRepository.deleteProtocol(id);
  }
}
