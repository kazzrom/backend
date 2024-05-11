import { Router } from "express";
import RegisteredOPPNController from "../../controllers/SocialPassport/RegisteredOPPNController.js";

const RegisteredOPPNRouter = Router();

RegisteredOPPNRouter.get("/", RegisteredOPPNController.getRecords);
RegisteredOPPNRouter.post("/", RegisteredOPPNController.createRecord);
RegisteredOPPNRouter.delete("/:id", RegisteredOPPNController.deleteRecord);

export default RegisteredOPPNRouter;
