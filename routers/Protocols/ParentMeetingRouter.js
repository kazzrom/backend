import { Router } from "express";
import ParentMeetingController from "../../controllers/Protocols/ParentMeetingController.js";

const parentMeetingRouter = Router();

parentMeetingRouter.get(
  "/:groupId",
  ParentMeetingController.getProtocolsByGroupId
);

parentMeetingRouter.post("/", ParentMeetingController.createProtocol);
parentMeetingRouter.put("/:id", ParentMeetingController.updateProtocol);
parentMeetingRouter.delete("/:id", ParentMeetingController.deleteProtocol);

export default parentMeetingRouter;
