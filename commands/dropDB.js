import sequelize from "../config/connectingDB.js";

sequelize.drop({ force: true });
