import Group from "../Group/Group.js";
import Parent from "../Profile/Family/FamilyMember.js";
import ParentMeeting from "./ParentMeeting.js";
import GroupMeeting from "./GroupMeeting.js";
import Homeroom from "./Homeroom.js";

export default () => {
  Group.hasMany(ParentMeeting, { foreignKey: "groupId", onDelete: "CASCADE" });
  ParentMeeting.belongsTo(Group, {
    foreignKey: "groupId",
  });

  Parent.belongsToMany(ParentMeeting, {
    through: "AttendanceParentMeetings",
    foreignKey: "parentId",
    timestamps: false,
    onDelete: "CASCADE",
  });

  ParentMeeting.belongsToMany(Parent, {
    through: "AttendanceParentMeetings",
    foreignKey: "parentMeetingId",
    as: "Parents",
    timestamps: false,
    onDelete: "CASCADE",
  });

  Group.hasMany(GroupMeeting, { foreignKey: "groupId", onDelete: "CASCADE" });
  GroupMeeting.belongsTo(Group, { foreignKey: "groupId" });

  Group.hasMany(Homeroom, { foreignKey: "groupId", onDelete: "CASCADE" });
  Homeroom.belongsTo(Group, { foreignKey: "groupId" });

  return { Group, ParentMeeting, GroupMeeting, Homeroom };
};
