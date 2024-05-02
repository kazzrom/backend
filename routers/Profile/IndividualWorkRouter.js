import { Router } from "express";
import IndividualWorkController from "../../controllers/Profile/IndividualWorkController.js";

const individualWorkRouter = Router();

individualWorkRouter.get(
  "/:studentId",
  IndividualWorkController.getAllIndividualWorkByStudentId
);

individualWorkRouter.post("/", IndividualWorkController.createIndividualWork);

individualWorkRouter.put("/:id", IndividualWorkController.updateIndividualWork);

individualWorkRouter.delete(
  "/:id",
  IndividualWorkController.deleteIndividualWork
);

export default individualWorkRouter;
