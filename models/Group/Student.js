import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const Student = sequelize.define(
  "Student",
  {
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    patronymic: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM,
      values: ["Мужской", "Женский"],
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Student;
