import Student from "./Student.js";
import Group from "./Group.js";
import GroupName from "./GroupName.js";
import GroupNumber from "./GroupNumber.js";
import Curator from "./Curator.js";

export default () => {
  Group.hasMany(Student, { foreignKey: "groupId", onDelete: "CASCADE" });
  Student.belongsTo(Group, { foreignKey: "groupId" });

  Curator.hasMany(Group, { foreignKey: "curatorId", onDelete: "CASCADE" });
  Group.belongsTo(Curator, { foreignKey: "curatorId" });

  return { Student, Group, GroupName, GroupNumber, Curator };
};
