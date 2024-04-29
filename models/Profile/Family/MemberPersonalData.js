import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";

const MemberPersonalData = sequelize.define(
  "MemberPersonalData",
  {
    workPlace: DataTypes.STRING,
    post: DataTypes.STRING,
    phoneNumber: DataTypes.STRING(15),
    residentialAddress: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

export default MemberPersonalData;
