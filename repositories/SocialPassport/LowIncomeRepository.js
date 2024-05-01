import initModels from "../../models/initModels.js";

const { Student, LowIncomeFamily } = initModels();

export default class LowIncomeRepository {
  static async getRecords(groupId) {
    const students = await Student.findAll({
      where: { groupId },
      include: [LowIncomeFamily],
    });

    if (!students) {
      return null;
    }

    const lowIncomeFamilies = students.map(
      (student) => student.LowIncomeFamily
    );

    return lowIncomeFamilies;
  }

  static async createRecord(data) {
    const { studentId, note } = data;
    await LowIncomeFamily.create({ studentId, note });
  }

  static async updateRecord(id, data) {
    const { note } = data;
    await LowIncomeFamily.update({ note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await LowIncomeFamily.destroy({ where: { id } });
  }
}
