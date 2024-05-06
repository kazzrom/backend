import initModels from "../../models/initModels.js";

const { Student, LargeFamily } = initModels();

export default class LargeFamilyRepository {
  static async getRecordsByGroupId(groupId) {
    const largeFamilies = await LargeFamily.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student],
    });

    if (!largeFamilies) {
      return null;
    }

    return largeFamilies;
  }

  static async createRecord(data) {
    const { Student: student, numberChildren, note } = data;
    const createdRecord = await LargeFamily.create({
      studentId: student.id,
      numberChildren,
      note,
    });

    const newRecord = await LargeFamily.findByPk(createdRecord.id, {
      include: [Student],
    });

    return newRecord;
  }

  static async updateRecord(id, data) {
    const { numberChildren, note } = data;
    await LargeFamily.update({ numberChildren, note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await LargeFamily.destroy({ where: { id } });
  }
}
