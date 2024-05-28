import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { IS_DOCKER_RUNNING } from "../constants.js";

if (!IS_DOCKER_RUNNING) {
  dotenv.config();
}

console.log("connectingDB");
console.log(process.env.DB_NAME);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
