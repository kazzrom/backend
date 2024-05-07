import { Op } from "sequelize";
import initModels from "../../models/initModels.js";

const { ParentMeeting, FamilyMember: Parent, Student } = initModels();

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

  static async getParentsByGroupId(groupId) {
    const parents = await Parent.findAll({
      include: {
        attributes: [],
        model: Student,
        where: { groupId },
      },
    });

    if (!parents) {
      return null;
    }

    return parents;
  }

  static async createProtocol({ protocol, presentParents }) {
    const createdProtocol = await ParentMeeting.create(protocol);
    console.log(presentParents);

    if (presentParents !== null) {
      const parentIds = presentParents.map((parent) => parent.id);
      const parents = await Parent.findAll({
        where: { id: { [Op.in]: parentIds } },
      });
      await createdProtocol.setFamilyMembers(parents);
    }

    const newProtocol = await ParentMeeting.findByPk(createdProtocol.id, {
      include: {
        model: Parent,
      },
    });

    return newProtocol;
  }

  static async updateProtocol({ id, updatedProtocol, presentParents }) {
    const protocol = await ParentMeeting.findByPk(id);

    const parentIds = presentParents.map((parent) => parent.id);

    const parents = await Parent.findAll({
      where: { id: { [Op.in]: parentIds } },
    });

    protocol.update(updatedProtocol);

    await protocol.setFamilyMembers(parents);
  }

  static async deleteProtocol(id) {
    await ParentMeeting.destroy({ where: { id } });
  }
}
