import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";

const InclinationName = sequelize.define(
  "InclinationName",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

export default InclinationName;
