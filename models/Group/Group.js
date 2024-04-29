import { DataTypes } from "sequelize";
import sequelize from "../../config/connectingDB.js";
import GroupName from "./GroupName.js";
import GroupNumber from "./GroupNumber.js";

const Group = sequelize.define(
  "Group",
  {
    groupNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GroupNumber,
        key: "number",
      },
    },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: GroupName,
        key: "name",
      },
    },
  },
  { timestamps: false }
);

export default Group;
