import User from "./User";
import RefreshSession from "./RefreshSession";

export default () => {
  User.hasMany(RefreshSession);
  RefreshSession.belongsTo(User);
};
