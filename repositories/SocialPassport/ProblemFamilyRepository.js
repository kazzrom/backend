import initModels from "../../models/initModels.js";

const { Student, ProblemFamily } = initModels();

export default class ProblemFamilyRepository {
  static async getRecordsByGroupId(groupId) {
    const problemFamilies = await ProblemFamily.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student],
    });

    if (!problemFamilies) {
      return null;
    }

    return problemFamilies;
  }

  static async createRecord(data) {
    const { Student: student, reason, note } = data;
    const createdRecord = await ProblemFamily.create({
      studentId: student.id,
      reason,
      note,
    });

    const newRecord = await ProblemFamily.findByPk(createdRecord.id, {
      include: [Student],
    });

    return newRecord;
  }

  static async updateRecord(id, data) {
    const { reason, note } = data;
    await ProblemFamily.update({ reason, note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await ProblemFamily.destroy({ where: { id } });
  }
}
