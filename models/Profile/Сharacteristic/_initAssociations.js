import Student from "../../Group/Student.js";
import Hobby from "./Hobby.js";
import Inclination from "./Inclination.js";
import StudentAttitudes from "./StudentAttitudes.js";
import StudentPersonality from "./StudentPersonality.js";

export default () => {
  Student.hasMany(Hobby, { foreignKey: "studentId", onDelete: "CASCADE" });
  Hobby.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasMany(Inclination, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  Inclination.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasOne(StudentAttitudes, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  StudentAttitudes.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasOne(StudentPersonality, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  StudentPersonality.belongsTo(Student, { foreignKey: "studentId" });

  return { Student, Hobby, Inclination, StudentAttitudes, StudentPersonality };
};
