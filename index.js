import express from "express";
import { generateDB } from "./commands/syncDB.js";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./swaggerOptions.js";
import Fingerprint from "express-fingerprint";
import cookieParser from "cookie-parser";

import AuthRootRouter from "./routers/Auth/AuthRouter.js";
import TokenService from "./services/Auth/Token.js";
import GroupRouter from "./routers/Group/GroupRouter.js";
import StudentRouter from "./routers/Group/StudentRouter.js";
import ProfileRouter from "./routers/Profile/ProfileRouter.js";
import ProtocolRouter from "./routers/Protocols/ProtocolRouter.js";
import SocialPassportRouter from "./routers/SocialPassport/SocialPassportRouter.js";
import ImageRouter from "./routers/Profile/ImageRouter.js";
import { IS_DOCKER_RUNNING } from "./constants.js";

if (IS_DOCKER_RUNNING) {
  await generateDB();
}

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/static", express.static("./static"));

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(express.static("uploads"));

app.use(
  Fingerprint({
    parameters: [Fingerprint.useragent, Fingerprint.acceptHeaders],
  })
);

const specs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/groups", GroupRouter);
app.use("/students", StudentRouter);
app.use("/profile", ProfileRouter);
app.use("/protocols", ProtocolRouter);
app.use("/images", ImageRouter);
app.use("/social-passport", TokenService.checkAccess, SocialPassportRouter);

app.use("/auth", AuthRootRouter);

app.get("/resource/protected", TokenService.checkAccess, (req, res) => {
  return res.status(200).json({ curator: req.curator, group: req.group });
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});
