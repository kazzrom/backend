import { Router } from "express";
import LowIncomeController from "../../controllers/SocialPassport/LowIncomeController.js";

const LowIncomeRouter = Router();

LowIncomeRouter.get("/:groupId", LowIncomeController.getRecords);
LowIncomeRouter.post("/", LowIncomeController.createRecord);
LowIncomeRouter.delete("/:id", LowIncomeController.deleteRecord);

export default LowIncomeRouter;
