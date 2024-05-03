import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./swaggerOptions.js";

import StudentRouter from "./routers/Group/StudentRouter.js";
import ProfileRouter from "./routers/Profile/ProfileRouter.js";
import ProtocolRouter from "./routers/Protocols/ProtocolRouter.js";
import SocialPassportRouter from "./routers/SocialPassport/SocialPassportRouter.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

const specs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/students", StudentRouter);
app.use("/profile", ProfileRouter);
app.use("/protocols", ProtocolRouter);
app.use("/social-passport", SocialPassportRouter);

app.listen(PORT, () => {
  console.log(`Server is running`);
});
