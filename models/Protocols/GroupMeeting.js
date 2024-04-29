import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const GroupMeeting = sequelize.define(
  "GroupMeeting",
  {
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meetingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    numberPeoplePresent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default GroupMeeting;
