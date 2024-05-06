import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const LargeFamily = sequelize.define(
  "LargeFamily",
  {
    numberChildren: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    note: DataTypes.TEXT,
  },
  { timestamps: false }
);

export default LargeFamily;
