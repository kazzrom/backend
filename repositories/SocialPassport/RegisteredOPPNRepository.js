import initModels from "../../models/initModels.js";

const { Student, StudentRegisteredOPPN } = initModels();

export default class RegisteredOPPNRepository {
  static async getRecords(groupId) {
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
    const { studentId, reason, note } = data;
    await StudentRegisteredOPPN.create({ studentId, reason, note });
  }

  static async updateRecord(id, data) {
    const { reason, note } = data;
    await StudentRegisteredOPPN.update({ reason, note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await StudentRegisteredOPPN.destroy({ where: { id } });
  }
}
