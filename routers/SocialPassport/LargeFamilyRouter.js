import { Router } from "express";
import LargeFamilyController from "../../controllers/SocialPassport/LargeFamilyController.js";

const LargeFamilyRouter = Router();

LargeFamilyRouter.get("/:groupId", LargeFamilyController.getRecords);
LargeFamilyRouter.post("/", LargeFamilyController.createRecord);
LargeFamilyRouter.delete("/:id", LargeFamilyController.deleteRecord);

export default LargeFamilyRouter;
