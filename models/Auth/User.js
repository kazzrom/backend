import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const User = sequelize.define(
  "User",
  {
    login: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default User;
