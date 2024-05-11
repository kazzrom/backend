import { Router } from "express";
import ParentMeetingController from "../../controllers/Protocols/ParentMeetingController.js";

const parentMeetingRouter = Router();

parentMeetingRouter.get("/", ParentMeetingController.getProtocolsByGroupId);

parentMeetingRouter.get(
  "/parents",
  ParentMeetingController.getParentsByGroupId
);

parentMeetingRouter.post("/", ParentMeetingController.createProtocol);
parentMeetingRouter.put("/:id", ParentMeetingController.updateProtocol);
parentMeetingRouter.delete("/:id", ParentMeetingController.deleteProtocol);

export default parentMeetingRouter;
