import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const StudentRegisteredOPPN = sequelize.define(
  "StudentRegisteredOPPN",
  {
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: DataTypes.TEXT,
  },
  { timestamps: false }
);

export default StudentRegisteredOPPN;
