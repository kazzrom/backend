import Student from "../../Group/Student.js";
import FamilyMember from "./FamilyMember.js";
import MemberPersonalData from "./MemberPersonalData.js";

export default () => {
  Student.belongsToMany(FamilyMember, {
    through: "Familyties",
    foreignKey: "studentId",
    timestamps: false,
    onDelete: "CASCADE",
  });

  FamilyMember.belongsToMany(Student, {
    through: "Familyties",
    foreignKey: "relativeId",
    timestamps: false,
  });

  FamilyMember.hasOne(MemberPersonalData, {
    foreignKey: "relativeId",
    onDelete: "CASCADE",
  });

  MemberPersonalData.belongsTo(FamilyMember, { foreignKey: "relativeId" });
};
