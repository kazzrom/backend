import initModels from "../../models/initModels.js";
import { Op } from "sequelize";

const { Student, FamilyMember } = initModels();

export default async function getStudentWithFamilyByGroupId(groupId) {
  return await Student.findAll({
    include: {
      model: FamilyMember,
      where: {
        relation: { [Op.or]: ["Мать", "Отец", "Опекун", "Бабушка", "Дедушка"] },
      },
    },
    where: { groupId },
  });
}
