import User from "./User.js";
import Curator from "../Group/Curator.js";
import RefreshSession from "./RefreshSession.js";

export default () => {
  User.hasMany(RefreshSession, { foreignKey: "userId", onDelete: "CASCADE" });
  RefreshSession.belongsTo(User, { foreignKey: "userId" });

  User.hasOne(Curator, { foreignKey: "userId", onDelete: "CASCADE" });
  Curator.belongsTo(User, { foreignKey: "userId" });

  return { User, RefreshSession, Curator };
};
