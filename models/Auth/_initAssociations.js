import User from "./User.js";
import RefreshSession from "./RefreshSession.js";

export default () => {
  User.hasMany(RefreshSession, { foreignKey: "userId" });
  RefreshSession.belongsTo(User, { foreignKey: "userId" });
};
