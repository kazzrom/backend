import initModels from "../../models/initModels";

const { GroupMeeting } = initModels();

export default class GroupMeetingRepository {
  static async getProtocols(groupId) {
    const protocols = await GroupMeeting.findAll({ where: { groupId } });

    if (!protocols) {
      return null;
    }

    return protocols;
  }

  static async createProtocol(data) {
    await GroupMeeting.create(data);
  }

  static async updateProtocol(id, data) {
    await GroupMeeting.update(data, { where: { id } });
  }

  static async deleteProtocol(id) {
    await GroupMeeting.destroy({ where: { id } });
  }
}
