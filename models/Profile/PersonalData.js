import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const PersonalData = sequelize.define(
  "PersonalData",
  {
    image: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    reportCardNumber: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    whereFrom: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
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
    },
    medicalPolicy: {
      type: DataTypes.STRING(20),
      unique: true,
    },
  },
  { timestamps: false }
);

export default PersonalData;
