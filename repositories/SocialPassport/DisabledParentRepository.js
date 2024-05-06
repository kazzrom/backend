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
    const { Student: student, FamilyMember: parent, note } = data;
    const createdRecord = await DisabledParent.create({
      studentId: student.id,
      parentId: parent.id,
      note,
    });

    const newRecord = await DisabledParent.findByPk(createdRecord.id, {
      include: [Student, Parent],
    });

    return newRecord;
  }

  static async updateRecord(id, data) {
    const { note } = data;
    await DisabledParent.update({ note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await DisabledParent.destroy({ where: { id } });
  }
}
