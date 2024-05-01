import { Op } from "sequelize";
import initModels from "../../models/initModels.js";

const { Student, FamilyMember, MemberPersonalData } = initModels();

export default class IncompleteFamilyRepository {
  static async getRecords() {
    const familiesWithParents = await Student.findAll({
      include: {
        model: FamilyMember,
        where: {
          relation: { [Op.or]: ["Мать", "Отец"] },
        },
        include: [MemberPersonalData],
      },
    });

    if (!familiesWithParents) {
      return null;
    }

    const incompleteFamilies = familiesWithParents.filter(
      (family) => family.FamilyMembers.length === 1
    );

    return incompleteFamilies;
  }
}
