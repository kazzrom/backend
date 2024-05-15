import { Router } from "express";
import LargeFamilyController from "../../controllers/SocialPassport/LargeFamilyController.js";

const LargeFamilyRouter = Router();

LargeFamilyRouter.get("/", LargeFamilyController.getRecords);

export default LargeFamilyRouter;
