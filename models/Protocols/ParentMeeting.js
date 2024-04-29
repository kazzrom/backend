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
      type: DataTypes.DATE,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default ParentMeeting;
