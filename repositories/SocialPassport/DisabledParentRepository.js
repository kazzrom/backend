import initModels from "../../models/initModels.js";

const { Student, DisabledParent } = initModels();

export default class DisabledParentRepository {
  static async getRecords(groupId) {
    const students = await Student.findAll({
      where: { groupId },
      include: [DisabledParent],
    });

    if (!students) {
      return null;
    }

    const disabledParents = students.map((student) => student.DisabledParents);

    return disabledParents;
  }

  static async createRecord(data) {
    const { studentId, parentId, note } = data;
    await DisabledParent.create({ studentId, parentId, note });
  }

  static async updateRecord(id, data) {
    const { note } = data;
    await DisabledParent.update({ note }, { where: { id } });
  }

  static async deleteRecord(id) {
    await DisabledParent.destroy({ where: { id } });
  }
}
