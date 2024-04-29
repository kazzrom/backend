import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";
import InclinationName from "./InclinationName.js";

const Inclination = sequelize.define(
  "Inclination",
  {
    inclinationName: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: InclinationName,
        key: "name",
      },
    },
  },
  { timestamps: false }
);

export default Inclination;
