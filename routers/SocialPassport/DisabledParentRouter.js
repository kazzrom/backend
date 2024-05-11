import { Router } from "express";
import DisabledParentController from "../../controllers/SocialPassport/DisabledParentController.js";

const DisabledParentRouter = Router();

DisabledParentRouter.get("/", DisabledParentController.getRecords);
DisabledParentRouter.post("/", DisabledParentController.createRecord);
DisabledParentRouter.delete("/:id", DisabledParentController.deleteRecord);

export default DisabledParentRouter;
