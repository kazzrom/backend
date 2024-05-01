import initModels from "../../models/initModels.js";

const { Student, ProblemFamily } = initModels();

export default class ProblemFamilyRepository {
  static async getRecords(groupId) {
    const students = await Student.findAll({
      where: { groupId },
      include: [ProblemFamily],
    });

    if (!students) {
      return null;
    }

    const problemFamilies = students.map((student) => student.ProblemFamily);

    return problemFamilies;
  }

  static async createRecord(data) {
    const { studentId, reason, note } = data;
    await ProblemFamily.create({ studentId, reason, note });
  }

  static async updateRecord(id, data) {
    const { reason, note } = data;
    await ProblemFamily.update({ reason, note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await ProblemFamily.destroy({ where: { id } });
  }
}
