import { Op } from "sequelize";
import initModels from "../../models/initModels.js";

const { ParentMeeting, FamilyMember: Parent } = initModels();

export default class ParentMeetingRepository {
  static async getProtocols(groupId) {
    const protocols = await ParentMeeting.findAll({
      where: { groupId },
      include: {
        model: Parent,
        as: "Parents",
      },
    });

    if (!protocols) {
      return null;
    }

    return protocols;
  }

  static async createProtocol(data) {
    const { theme, meetingDate, content, groupId } = data;

    const protocol = await ParentMeeting.create({
      theme,
      meetingDate,
      content,
      groupId,
    });

    const { parentIds } = data;

    const parents = await Parent.findAll({
      where: {
        id: {
          [Op.or]: parentIds,
        },
      },
    });

    await protocol.addParents(parents);
  }

  static async updateProtocol(id, data) {
    await ParentMeeting.update(data, { where: { id } });
  }

  static async deleteProtocol(id) {
    await ParentMeeting.destroy({ where: { id } });
  }
}
