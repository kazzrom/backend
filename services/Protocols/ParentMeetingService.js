import ParentMeetingRepository from "../../repositories/Protocols/ParentMeetingRepository.js";

export default class ParentMeetingService {
  static async getProtocolsByGroupId(groupId) {
    const response = await ParentMeetingRepository.getProtocolsByGroupId(
      groupId
    );

    return response;
  }

  static async getParentsByGroupId(groupId) {
    const response = await ParentMeetingRepository.getParentsByGroupId(groupId);

    return response;
  }

  static async createProtocol({ data, groupId }) {
    const { theme, meetingDate, content, FamilyMembers } = data;

    const newProtocol = await ParentMeetingRepository.createProtocol({
      protocol: { theme, meetingDate, content, groupId },
      presentParents: FamilyMembers,
    });

    return newProtocol;
  }

  static async updateProtocol({ id, data }) {
    const { theme, meetingDate, content, FamilyMembers } = data;

    await ParentMeetingRepository.updateProtocol({
      id,
      updatedProtocol: { theme, meetingDate, content },
      presentParents: FamilyMembers,
    });
  }

  static async deleteProtocol(id) {
    await ParentMeetingRepository.deleteProtocol(id);
  }
}
