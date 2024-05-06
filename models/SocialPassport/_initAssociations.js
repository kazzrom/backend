import Student from "../Group/Student.js";
import Parent from "../Profile/Family/FamilyMember.js";
import ProblemFamily from "./ProblemFamily.js";
import LowIncomeFamily from "./LowIncomeFamily.js";
import StudentRegisteredOPPN from "./StudentRegisteredOPPN.js";
import UnemployedParent from "./UnemployedParent.js";
import StudentsWithChronicDiseases from "./StudentsWithChronicDiseases.js";
import DisabledParent from "./DisabledParent.js";
import LargeFamily from "./LargeFamily.js";

export default () => {
  Student.hasOne(ProblemFamily, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  ProblemFamily.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasOne(LowIncomeFamily, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  LowIncomeFamily.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasOne(StudentRegisteredOPPN, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  StudentRegisteredOPPN.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasMany(UnemployedParent, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  UnemployedParent.belongsTo(Student, { foreignKey: "studentId" });

  Parent.hasMany(UnemployedParent, {
    foreignKey: "parentId",
    onDelete: "CASCADE",
  });
  UnemployedParent.belongsTo(Parent, { foreignKey: "parentId" });

  Student.hasMany(StudentsWithChronicDiseases, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  StudentsWithChronicDiseases.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasMany(DisabledParent, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  DisabledParent.belongsTo(Student, { foreignKey: "studentId" });

  Parent.hasMany(DisabledParent, {
    foreignKey: "parentId",
    onDelete: "CASCADE",
  });
  DisabledParent.belongsTo(Parent, { foreignKey: "parentId" });

  Student.hasOne(LargeFamily, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });

  LargeFamily.belongsTo(Student, { foreignKey: "studentId" });

  return {
    Student,
    ProblemFamily,
    LowIncomeFamily,
    StudentRegisteredOPPN,
    UnemployedParent,
    StudentsWithChronicDiseases,
    DisabledParent,
    LargeFamily,
  };
};
