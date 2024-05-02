import initModels from "../../models/initModels.js";

const { Student, DisabledParent, FamilyMember: Parent } = initModels();

export default class DisabledParentRepository {
  static async getRecordsByGroupId(groupId) {
    const disabledParents = await DisabledParent.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student, { model: Parent }],
    });

    if (!disabledParents) {
      return null;
    }

    return disabledParents;
  }

  static async createRecord(data) {
    const { studentId, parentId, note } = data;
    await DisabledParent.create({ studentId, parentId, note });
  }

  static async updateRecord(id, data) {
    const { note } = data;
    await DisabledParent.update({ note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await DisabledParent.destroy({ where: { id } });
  }
}
