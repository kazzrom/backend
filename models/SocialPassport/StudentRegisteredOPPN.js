import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const RegisteredOPPNFamily = sequelize.define(
  "RegisteredOPPNFamily",
  {
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: DataTypes.TEXT,
  },
  { timestamps: false }
);

export default RegisteredOPPNFamily;
