import initModels from "../../models/initModels.js";

const { Student, UnemployedParent, FamilyMember: Parent } = initModels();

export default class UnemployedRepository {
  static async getRecords(groupId) {
    const unemployedParents = await UnemployedParent.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student, { model: Parent, as: "Parent" }],
    });

    if (!unemployedParents) {
      return null;
    }

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
