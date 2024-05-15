import { Router } from "express";
import DisabledStudentController from "../../controllers/SocialPassport/DisabledStudentController.js";

const DisabledStudentRouter = Router();

DisabledStudentRouter.get("/", DisabledStudentController.getRecords);
DisabledStudentRouter.post("/", DisabledStudentController.createRecord);
DisabledStudentRouter.delete("/:id", DisabledStudentController.deleteRecord);

export default DisabledStudentRouter;
