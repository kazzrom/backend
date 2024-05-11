import { Router } from "express";
import ProblemFamilyController from "../../controllers/SocialPassport/ProblemFamilyController.js";

const ProblemFamilyRouter = Router();

ProblemFamilyRouter.get("/", ProblemFamilyController.getRecords);
ProblemFamilyRouter.post("/", ProblemFamilyController.createRecord);
ProblemFamilyRouter.delete("/:id", ProblemFamilyController.deleteRecord);

export default ProblemFamilyRouter;
