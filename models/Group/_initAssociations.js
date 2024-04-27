import Student from "./Student.js";
import Group from "./Group.js";
import Curator from "./Curator.js";

export default () => {
  Group.hasMany(Student);
  Student.belongsTo(Group);

  Curator.hasMany(Group);
  Group.belongsTo(Curator);
};