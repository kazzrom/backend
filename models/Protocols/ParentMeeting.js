import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const ParentMeeting = sequelize.define(
  "ParentMeeting",
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
  },
  { timestamps: false }
);

export default ParentMeeting;
