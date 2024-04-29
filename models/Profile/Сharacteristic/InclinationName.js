import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";

const InclinationName = sequelize.define(
  "InclinationName",
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default InclinationName;
