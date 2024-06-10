import { Op } from "sequelize";
import initModels from "../../models/initModels.js";

const { Student, FamilyMember } = initModels();

export default class LargeFamilyRepository {
  static async getRecords(groupId) {
    const families = await Student.findAll({
      where: { groupId },
      include: [
        {
          model: FamilyMember,
          where: {
            relation: { [Op.or]: ["Брат", "Сестра"] },
          },
        },
      ],
    });

    if (!families) {
      return null;
    }

    const largeFamilies = families.filter(
      (family) => family.FamilyMembers.length >= 2
    );

    return largeFamilies;
  }
}
