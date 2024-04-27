import Student from "../../Group/Student.js";
import FamilyMember from "./FamilyMember.js";

export default () => {
  Student.belongsToMany(FamilyMember, {
    through: "Familyties",
    foreignKey: "studentId",
    timestamps: false,
  });

  FamilyMember.belongsToMany(Student, {
    through: "Familyties",
    foreignKey: "relativeId",
    timestamps: false,
  });
};
