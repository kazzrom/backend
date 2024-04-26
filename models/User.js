import { DataTypes } from "sequelize";
import sequelize from "../config/connectingDB.js";

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

export default User;
