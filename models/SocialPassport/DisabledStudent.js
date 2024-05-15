import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const DisabledStudent = sequelize.define(
  "DisabledStudent",
  {
    disability: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: DataTypes.TEXT,
  },
  { timestamps: false }
);

export default DisabledStudent;
