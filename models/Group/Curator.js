import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const Curator = sequelize.define(
  "Curator",
  {
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    patronymic: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Curator;
