import Student from "../../Group/Student.js";
import FamilyMember from "./FamilyMember.js";
import MemberPersonalData from "./MemberPersonalData.js";
import RelationName from "./RelationName.js";

export default () => {
  Student.belongsToMany(FamilyMember, {
    through: "Familyties",
    foreignKey: "studentId",
    onDelete: "CASCADE",
    timestamps: false,
  });

  FamilyMember.belongsToMany(Student, {
    through: "Familyties",
    foreignKey: "familyMemberId",
  });

  FamilyMember.hasOne(MemberPersonalData, {
    foreignKey: "familyMemberId",
    onDelete: "CASCADE",
  });
  MemberPersonalData.belongsTo(FamilyMember, { foreignKey: "familyMemberId" });

  return { Student, FamilyMember, MemberPersonalData, RelationName };
};
