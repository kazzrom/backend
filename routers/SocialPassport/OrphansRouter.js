import { Router } from "express";
import OrphansController from "../../controllers/SocialPassport/OrphansController.js";

const OrphansRouter = Router();

OrphansRouter.use("/", OrphansController.getRecords);

export default OrphansRouter;
