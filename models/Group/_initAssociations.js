import Student from "./Student.js";
import Group from "./Group.js";
import Curator from "./Curator.js";

export default () => {
  Group.hasMany(Student, { foreignKey: "groupId" });
  Student.belongsTo(Group, { foreignKey: "groupId" });

  Curator.hasMany(Group, { foreignKey: "curatorId" });
  Group.belongsTo(Curator, { foreignKey: "curatorId" });
};
