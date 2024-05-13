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
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    content: DataTypes.TEXT,
    numberPeoplePresent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default GroupMeeting;
