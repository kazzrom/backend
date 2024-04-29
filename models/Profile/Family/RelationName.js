import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";

const RelationName = sequelize.define(
  "RelationName",
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default RelationName;
