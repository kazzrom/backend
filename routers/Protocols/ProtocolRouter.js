import { Router } from "express";
import ParentMeetingRouter from "./ParentMeetingRouter";
import GroupMettingRouter from "./GroupMettingRouter";
import HomeroomRouter from "./HomeroomRouter";

const protocolRouter = Router();

protocolRouter.use("/parent-meetings", ParentMeetingRouter);
protocolRouter.use("/group-meetings", GroupMettingRouter);
protocolRouter.use("/homerooms", HomeroomRouter);

export default protocolRouter;
