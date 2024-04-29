import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const ProblemFamily = sequelize.define(
  "ProblemFamily",
  {
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: DataTypes.TEXT,
  },
  {
    timestamps: false,
  }
);

export default ProblemFamily;
