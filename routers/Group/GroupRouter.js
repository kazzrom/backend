import { Router } from "express";
import GroupController from "../../controllers/Group/GroupController.js";

const groupRouter = Router();

groupRouter.get("/names", GroupController.getGroupNames);

export default groupRouter;
