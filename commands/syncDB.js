import sequelize from "../config/connectingDB.js";
import initModels from "../models/initModels.js";

initModels();

sequelize.sync({ alter: true });
 