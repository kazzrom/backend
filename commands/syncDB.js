import sequelize from "../config/connectingDB.js";
import baseQuery from "./queries/baseQuery.js";
import initModels from "../models/initModels.js";

export async function generateDB() {
  await sequelize.sync();
  const { RelationName } = initModels();
  const relation = await RelationName.findOne({
    where: { name: "Мать" },
  });

  if (!relation) {
    await baseQuery();
  }
}
