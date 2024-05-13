import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./swaggerOptions.js";
import Fingerprint from "express-fingerprint";
import cookieParser from "cookie-parser";

import AuthRootRouter from "./routers/Auth/Auth.js";
import TokenService from "./services/Auth/Token.js";
import StudentRouter from "./routers/Group/StudentRouter.js";
import ProfileRouter from "./routers/Profile/ProfileRouter.js";
import ProtocolRouter from "./routers/Protocols/ProtocolRouter.js";
import SocialPassportRouter from "./routers/SocialPassport/SocialPassportRouter.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(
  Fingerprint({
    parameters: [Fingerprint.useragent, Fingerprint.acceptHeaders],
  })
);

const specs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/students", StudentRouter);
app.use("/profile", ProfileRouter);
app.use("/protocols", ProtocolRouter);
app.use("/social-passport", TokenService.checkAccess, SocialPassportRouter);

app.use("/auth", AuthRootRouter);

app.get("/resource/protected", TokenService.checkAccess, (req, res) => {
  return res.status(200).json(req.curator.surname + " " + req.curator.name);
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});
