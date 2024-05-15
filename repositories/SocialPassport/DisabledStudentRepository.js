import initModels from "../../models/initModels.js";

const { Student, DisabledStudent } = initModels();

export default class DisabledStudentRepository {
  static async getRecordsByGroupId(groupId) {
    const disabledStudents = await DisabledStudent.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student],
    });

    if (!disabledStudents) {
      return null;
    }

    return disabledStudents;
  }

  static async createRecord(data) {
    const { Student: student, disability, note } = data;
    const createdRecord = await DisabledStudent.create({
      studentId: student.id,
      disability,
      note,
    });

    const newRecord = await DisabledStudent.findByPk(createdRecord.id, {
      include: [Student],
    });

    return newRecord;
  }

  static async updateRecord(id, data) {
    const { disability, note } = data;
    await DisabledStudent.update({ disability, note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await DisabledStudent.destroy({ where: { id } });
  }
}
