import Student from "../Group/Student.js";
import ProblemFamily from "./ProblemFamily.js";
import LowIncomeFamily from "./LowIncomeFamily.js";
import StudentRegisteredOPPN from "./StudentRegisteredOPPN.js";
import UnemployedParent from "./UnemployedParent.js";
import StudentsWithChronicDiseases from "./StudentsWithChronicDiseases.js";
import DisabledParent from "./DisabledParent.js";

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

  return {
    Student,
    ProblemFamily,
    LowIncomeFamily,
    StudentRegisteredOPPN,
    UnemployedParent,
    StudentsWithChronicDiseases,
    DisabledParent,
  };
};