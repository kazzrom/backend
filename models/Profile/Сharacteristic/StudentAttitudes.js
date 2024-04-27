import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";
import Student from "../../Group/Student.js";

// Отношения студента к чему-либо
const StudentAttitudes = sequelize.define(
  "StudentAttitudes",
  {
    //   Отношение к учебе
    attitudeToStudy: DataTypes.TEXT,
    // Отношение к старшим
    attitudeToElders: DataTypes.TEXT,
    // Отношение к неудачам
    attitudeToFailures: DataTypes.TEXT,
  },
  {
    timestamps: false,
  }
);

export default StudentAttitudes;
