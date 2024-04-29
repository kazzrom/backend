import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const Homeroom = sequelize.define(
  "Homeroom",
  {
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meetingTime: {
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
    purpose: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tasks: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Ход проведения
    courseOfMeeting: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    results: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Homeroom;
