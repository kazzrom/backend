import { Router } from "express";
import UnemployedController from "../../controllers/SocialPassport/UnemployedController.js";

const UnemployedRouter = Router();

UnemployedRouter.get("/", UnemployedController.getRecords);
UnemployedRouter.post("/", UnemployedController.createRecord);
UnemployedRouter.delete("/:id", UnemployedController.deleteRecord);

export default UnemployedRouter;
