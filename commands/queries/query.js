import initModels from "../../models/initModels.js";

const { Student, PersonalData, FamilyMember } = initModels();

const student = await Student.findByPk(1, {
  include: [PersonalData, FamilyMember],
});

console.log(student.toJSON());
