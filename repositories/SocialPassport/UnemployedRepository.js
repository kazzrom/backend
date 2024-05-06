import initModels from "../../models/initModels.js";

const { Student, UnemployedParent, FamilyMember: Parent } = initModels();

export default class UnemployedRepository {
  static async getRecordsByGroupId(groupId) {
    const unemployedParents = await UnemployedParent.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student, { model: Parent }],
    });

    if (!unemployedParents) {
      return null;
    }

    return unemployedParents;
  }
  // FIXME: пофиксить создание записи
  static async createRecord(data) {
    const { Student: student, FamilyMember: parent, note } = data;
    const createdRecord = await UnemployedParent.create({
      studentId: student.id,
      parentId: parent.id,
      note,
    });

    const newRecord = await UnemployedParent.findByPk(createdRecord.id, {
      include: [Student, Parent],
    });

    return newRecord;
  }

  static async updateRecord(id, data) {
    const { note } = data;
    await UnemployedParent.update({ note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await UnemployedParent.destroy({ where: { id } });
  }
}
