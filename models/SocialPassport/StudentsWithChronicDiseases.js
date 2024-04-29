import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";

const StudentsWithChronicDiseases = sequelize.define(
  "StudentsWithChronicDiseases",
  {
    disease: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: DataTypes.TEXT,
  },
  { timestamps: false }
);

export default StudentsWithChronicDiseases;
