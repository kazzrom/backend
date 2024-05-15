import sequelize from "../config/connectingDB.js";
import initModels from "../models/initModels.js";

const { IndividualWork, Student, PersonalData } = initModels();

sequelize.sync({ alter: true });
// PersonalData.sync({ alter: true });
