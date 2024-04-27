import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";

const RelationName = sequelize.define(
  "RelationName",
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

export default RelationName;
