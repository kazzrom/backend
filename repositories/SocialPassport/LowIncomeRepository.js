import initModels from "../../models/initModels.js";

const { Student, LowIncomeFamily } = initModels();

export default class LowIncomeRepository {
  static async getRecordsByGroupId(groupId) {
    const lowIncomeFamilies = await LowIncomeFamily.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student],
    });

    if (!lowIncomeFamilies) {
      return null;
    }

    return lowIncomeFamilies;
  }

  static async createRecord(data) {
    const { Student: student, note } = data;
    const createdRecord = await LowIncomeFamily.create({ studentId: student.id, note });

    const newRecord = await LowIncomeFamily.findByPk(createdRecord.id, {
      include: [Student],
    });

    return newRecord;
  }

  static async updateRecord(id, data) {
    const { note } = data;
    await LowIncomeFamily.update({ note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await LowIncomeFamily.destroy({ where: { id } });
  }
}
