import { Router } from "express";
import ParentMeetingRouter from "./ParentMeetingRouter.js";
import GroupMettingRouter from "./GroupMettingRouter.js";
import HomeroomRouter from "./HomeroomRouter.js";

const protocolRouter = Router();

protocolRouter.use("/parent-meetings", ParentMeetingRouter);
protocolRouter.use("/group-meetings", GroupMettingRouter);
protocolRouter.use("/homerooms", HomeroomRouter);

export default protocolRouter;
