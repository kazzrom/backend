import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const LowIncomeFamily = sequelize.define(
  "LowIncomeFamily",
  { note: DataTypes.TEXT },
  { timestamps: false }
);

export default LowIncomeFamily;
