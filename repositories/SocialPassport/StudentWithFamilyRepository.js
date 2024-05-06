import initModels from "../../models/initModels.js";

const { Student, FamilyMember } = initModels();

export default async function getStudentWithFamilyByGroupId(groupId) {
  return await Student.findAll({
    include: [FamilyMember],
    where: { groupId },
  });
}
