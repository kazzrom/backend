import { Router } from "express";
import GroupMeetingController from "../../controllers/Protocols/GroupMeetingController.js";
import TokenService from "../../services/Auth/Token.js";


const groupMeetingRouter = Router();

groupMeetingRouter.get(
  "/",
  TokenService.checkAccess,
  GroupMeetingController.getProtocolsByGroupId
);

groupMeetingRouter.post("/", TokenService.checkAccess, GroupMeetingController.createProtocol);
groupMeetingRouter.put("/:id", GroupMeetingController.updateProtocol);
groupMeetingRouter.delete("/:id", GroupMeetingController.deleteProtocol);

export default groupMeetingRouter;
