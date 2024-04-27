import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const GroupNumber = sequelize.define(
  "GroupNumber",
  {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

export default GroupNumber;
