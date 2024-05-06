import { Router } from "express";
import IncompleteFamilyController from "../../controllers/SocialPassport/IncompleteFamilyController.js";

const IncompleteFamilyRouter = Router();

IncompleteFamilyRouter.use("/:groupId", IncompleteFamilyController.getRecords);

export default IncompleteFamilyRouter;
