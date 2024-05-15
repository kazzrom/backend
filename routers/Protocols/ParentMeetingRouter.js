import { Router } from "express";
import ParentMeetingController from "../../controllers/Protocols/ParentMeetingController.js";
import TokenService from "../../services/Auth/Token.js";

const parentMeetingRouter = Router();

parentMeetingRouter.get(
  "/",
  TokenService.checkAccess,
  ParentMeetingController.getProtocolsByGroupId
);

parentMeetingRouter.get(
  "/parents",
  TokenService.checkAccess,
  ParentMeetingController.getParentsByGroupId
);

parentMeetingRouter.post(
  "/",
  TokenService.checkAccess,
  ParentMeetingController.createProtocol
);
parentMeetingRouter.put("/:id", ParentMeetingController.updateProtocol);
parentMeetingRouter.delete("/:id", ParentMeetingController.deleteProtocol);

export default parentMeetingRouter;
