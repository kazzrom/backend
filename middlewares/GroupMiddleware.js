export function checkGroupId(req, res, next) {
  const { groupid } = req.headers;
  req.groupId = Number(groupid);
  next();
}
