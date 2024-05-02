import { Router } from "express";
import GroupMeetingController from "../../controllers/Protocols/GroupMeetingController.js";

const groupMeetingRouter = Router();

groupMeetingRouter.get(
  "/:groupId",
  GroupMeetingController.getProtocolsByGroupId
);

groupMeetingRouter.post("/", GroupMeetingController.createProtocol);
groupMeetingRouter.put("/:id", GroupMeetingController.updateProtocol);
groupMeetingRouter.delete("/:id", GroupMeetingController.deleteProtocol);

export default groupMeetingRouter;
