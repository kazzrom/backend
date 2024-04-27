import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";

// Личность студента
const StudentPersonality = sequelize.define(
  "StudentPersonality",
  {
    // Положительные стороны
    positiveSides: DataTypes.TEXT,
    // Негативные стороны
    negativeSides: DataTypes.TEXT,
    // Наличие правонарушений
    presenceOffenses: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
  }
);

export default StudentPersonality;
