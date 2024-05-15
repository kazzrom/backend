import sequelize from "../config/connectingDB.js";
import initModels from "../models/initModels.js";

const { IndividualWork } = initModels();

// sequelize.sync({ alter: true });
IndividualWork.sync({ alter: true });
