import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";

const Hobby = sequelize.define(
  "Hobby",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Hobby;
