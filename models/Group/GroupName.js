import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const GroupName = sequelize.define(
  "GroupName",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

export default GroupName;
