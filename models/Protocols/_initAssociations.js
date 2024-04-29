import Group from "../Group/Group.js";
import Parent from "../Profile/Family/FamilyMember.js";
import ParentMeeting from "./ParentMeeting.js";
import GroupMeeting from "./GroupMeeting.js";
import Homeroom from "./Homeroom.js";

export default () => {
  Group.hasMany(ParentMeeting, { foreignKey: "groupId" });
  ParentMeeting.belongsTo(Group, {
    foreignKey: "groupId",
    onDelete: "CASCADE",
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
    timestamps: false,
    onDelete: "CASCADE",
  });

  Group.hasMany(GroupMeeting, { foreignKey: "groupId", onDelete: "CASCADE" });
  GroupMeeting.belongsTo(Group, { foreignKey: "groupId" });

  Group.hasMany(Homeroom, { foreignKey: "groupId", onDelete: "CASCADE" });
  Homeroom.belongsTo(Group, { foreignKey: "groupId" });
};
