import initModels from "../../models/initModels.js";

const { Student, FamilyMember, MemberPersonalData } = initModels();

export default class UnderWardshipRepository {
  static async getRecords() {
    const underWardshipStudents = await Student.findAll({
      include: {
        model: FamilyMember,
        where: {
          relation: "Опекун",
        },
        include: [MemberPersonalData],
      },
    });

    if (!underWardshipStudents) {
      return null;
    }

    return underWardshipStudents;
  }
}
