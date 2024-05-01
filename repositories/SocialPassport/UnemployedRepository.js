import initModels from "../../models/initModels.js";

const { Student, UnemployedParent } = initModels();

export default class UnemployedRepository {
  static async getRecords(groupId) {
    const students = await Student.findAll({
      where: { groupId },
      include: [UnemployedParent],
    });

    if (!students) {
      return null;
    }

    const unemployedParents = students.map(
      (student) => student.UnemployedParents
    );

    return unemployedParents;
  }

  static async createRecord(data) {
    const { studentId, parentId, note } = data;
    await UnemployedParent.create({ studentId, parentId, note });
  }

  static async updateRecord(id, data) {
    const { note } = data;
    await UnemployedParent.update({ note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await UnemployedParent.destroy({ where: { id } });
  }
}
