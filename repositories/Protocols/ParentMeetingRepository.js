import { Op } from "sequelize";
import initModels from "../../models/initModels.js";

const { ParentMeeting, FamilyMember: Parent } = initModels();

export default class ParentMeetingRepository {
  static async getProtocolsByGroupId(groupId) {
    const protocols = await ParentMeeting.findAll({
      where: { groupId },
      include: {
        model: Parent,
      },
    });

    if (!protocols) {
      return null;
    }

    return protocols;
  }

  static async createProtocol({ protocol, parentIds }) {
    const createdProtocol = await ParentMeeting.create(protocol);

    const parents = await Parent.findAll({
      where: {
        id: {
          [Op.or]: parentIds,
        },
      },
    });

    await createdProtocol.setParents(parents);
  }

  static async updateProtocol({ id, updatedProtocol, parentIds }) {
    const protocol = await ParentMeeting.findByPk(id);

    protocol.update(updatedProtocol);

    const parents = await Parent.findAll({
      where: {
        id: {
          [Op.or]: parentIds,
        },
      },
    });

    await protocol.setParents(parents);
  }

  static async deleteProtocol(id) {
    await ParentMeeting.destroy({ where: { id } });
  }
}
