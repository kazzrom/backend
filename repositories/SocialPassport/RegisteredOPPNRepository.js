import initModels from "../../models/initModels.js";

const { Student, StudentRegisteredOPPN } = initModels();

export default class RegisteredOPPNRepository {
  static async getRecords(groupId) {
    const students = await Student.findAll({
      where: { groupId },
      include: [StudentRegisteredOPPN],
    });

    if (!students) {
      return null;
    }

    const registeredOPPNs = students.map(
      (student) => student.StudentRegisteredOPPN
    );

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
