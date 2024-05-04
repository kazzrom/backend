import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";

const MemberPersonalData = sequelize.define(
  "MemberPersonalData",
  {
    workplace: DataTypes.STRING,
    post: DataTypes.STRING,
    phoneNumber: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    residentialAddress: DataTypes.STRING,
  },
  { timestamps: false }
);

export default MemberPersonalData;
