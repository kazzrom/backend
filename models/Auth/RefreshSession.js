import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const RefreshSession = sequelize.define(
  "RefreshSession",
  {
    refreshToken: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    fingerprint: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default RefreshSession;
