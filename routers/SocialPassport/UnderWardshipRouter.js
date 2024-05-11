import { Router } from "express";
import UnderWardshipController from "../../controllers/SocialPassport/UnderWardshipController.js";

const UnderWardshipRouter = Router();

UnderWardshipRouter.use("/", UnderWardshipController.getRecords);

export default UnderWardshipRouter;
