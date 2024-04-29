import Student from "../../Group/Student.js";
import FamilyMember from "./FamilyMember.js";
import MemberPersonalData from "./MemberPersonalData.js";

export default () => {
  Student.belongsToMany(FamilyMember, {
    through: "Familyties",
    foreignKey: "studentId",
    onDelete: "CASCADE",
    timestamps: false,
  });

  FamilyMember.belongsToMany(Student, {
    through: "Familyties",
    foreignKey: "relativeId",
  });

  FamilyMember.hasOne(MemberPersonalData, {
    foreignKey: "relativeId",
    onDelete: "CASCADE",
  });
  MemberPersonalData.belongsTo(FamilyMember, { foreignKey: "familyMemberId" });
};
