import { DataTypes } from "sequelize";
import sequelize from "../../../config/connectingDB.js";
import RelationName from "./RelationName.js";

const FamilyMember = sequelize.define(
  "FamilyMember",
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
    relation: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: RelationName,
        key: "name",
      },
    },
    workPlace: DataTypes.STRING,
    post: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

export default FamilyMember;
