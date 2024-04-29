import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const PersonalData = sequelize.define(
  "PersonalData",
  {
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    reportCardNumber: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    residentialAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SNILS: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    medicalPolicy: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default PersonalData;
