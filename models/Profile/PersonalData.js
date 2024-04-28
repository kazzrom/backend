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
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    residentialAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SNILS: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    medicalPolicy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default PersonalData;
