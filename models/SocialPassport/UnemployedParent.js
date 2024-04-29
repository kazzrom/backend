import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const UnemployedParent = sequelize.define(
  "UnemployedParent",
  { note: DataTypes.TEXT },
  { timestamps: false }
);

export default UnemployedParent;
