import initModels from "../../models/initModels.js";

const { Student, StudentRegisteredOPPN } = initModels();

export default class RegisteredOPPNRepository {
  static async getRecordsByGroupId(groupId) {
    const registeredOPPNs = await StudentRegisteredOPPN.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student],
    });

    if (!registeredOPPNs) {
      return null;
    }

    return registeredOPPNs;
  }

  static async createRecord(data) {
    const { Student: student, reason, note } = data;
    const createdRecord = await StudentRegisteredOPPN.create({
      studentId: student.id,
      reason,
      note,
    });

    const newRecord = await StudentRegisteredOPPN.findByPk(createdRecord.id, {
      include: [Student],
    });

    return newRecord;
  }

  static async updateRecord(id, data) {
    const { reason, note } = data;
    await StudentRegisteredOPPN.update({ reason, note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await StudentRegisteredOPPN.destroy({ where: { id } });
  }
}
