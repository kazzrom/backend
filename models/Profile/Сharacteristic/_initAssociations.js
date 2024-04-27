import Student from "../../Group/Student.js";
import Hobby from "./Hobby.js";
import Inclination from "./Inclination.js";
import StudentAttitudes from "./StudentAttitudes.js";
import StudentPersonality from "./StudentPersonality.js";

export default () => {
  Student.hasMany(Hobby, { foreignKey: "studentId" });
  Hobby.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasMany(Inclination, { foreignKey: "studentId" });
  Inclination.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasOne(StudentAttitudes, { foreignKey: "studentId" });
  StudentAttitudes.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasOne(StudentPersonality, { foreignKey: "studentId" });
  StudentPersonality.belongsTo(Student, { foreignKey: "studentId" });
};
