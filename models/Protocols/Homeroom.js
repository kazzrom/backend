import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const Homeroom = sequelize.define(
  "Homeroom",
  {
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meetingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Место проведения
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberPeoplePresent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Цель
    purpose: DataTypes.STRING,

    tasks: DataTypes.TEXT,

    // Ход проведения
    courseOfMeeting: DataTypes.TEXT,

    results: DataTypes.TEXT,
  },
  { timestamps: false }
);

export default Homeroom;
