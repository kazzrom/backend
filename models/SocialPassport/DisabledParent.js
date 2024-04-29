import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const DisabledParent = sequelize.define(
  "DisabledParent",
  { note: DataTypes.TEXT },
  { timestamps: false }
);

export default DisabledParent;
