import Student from "../Group/Student.js";
import ProblemFamily from "./ProblemFamily.js";
import LowIncomeFamily from "./LowIncomeFamily.js";
import StudentRegisteredOPPN from "./StudentRegisteredOPPN.js";
import UnemployedParent from "./UnemployedParent.js";
import StudentsWithChronicDiseases from "./StudentsWithChronicDiseases.js";
import DisabledParent from "./DisabledParent.js";

export default () => {
  ProblemFamily.hasOne(Student, { foreignKey: "studentId" });
  Student.belongsTo(ProblemFamily, { foreignKey: "studentId" });

  LowIncomeFamily.hasOne(Student, { foreignKey: "studentId" });
  Student.belongsTo(LowIncomeFamily, { foreignKey: "studentId" });

  StudentRegisteredOPPN.hasOne(Student, { foreignKey: "studentId" });
  Student.belongsTo(StudentRegisteredOPPN, { foreignKey: "studentId" });

  UnemployedParent.hasMany(Student, { foreignKey: "studentId" });
  Student.belongsTo(UnemployedParent, { foreignKey: "studentId" });

  StudentsWithChronicDiseases.hasMany(Student, { foreignKey: "studentId" });
  Student.belongsTo(StudentsWithChronicDiseases, { foreignKey: "studentId" });

  DisabledParent.hasMany(Student, { foreignKey: "studentId" });
  Student.belongsTo(DisabledParent, { foreignKey: "studentId" });
};
