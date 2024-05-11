import { Router } from "express";
import ParentMeetingRouter from "./ParentMeetingRouter.js";
import GroupMettingRouter from "./GroupMettingRouter.js";
import HomeroomRouter from "./HomeroomRouter.js";
import TokenService from "../../services/Auth/Token.js";

const protocolRouter = Router();

protocolRouter.use(
  "/parent-meetings",
  TokenService.checkAccess,
  ParentMeetingRouter
);
protocolRouter.use(
  "/group-meetings",
  TokenService.checkAccess,
  GroupMettingRouter
);
protocolRouter.use("/homerooms", TokenService.checkAccess, HomeroomRouter);

export default protocolRouter;
