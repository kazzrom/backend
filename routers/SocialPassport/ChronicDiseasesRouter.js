import { Router } from "express";
import ChronicDiseasesController from "../../controllers/SocialPassport/ChronicDiseasesController.js";

const ChronicDiseasesRouter = Router();

ChronicDiseasesRouter.get("/", ChronicDiseasesController.getRecords);
ChronicDiseasesRouter.post("/", ChronicDiseasesController.createRecord);
ChronicDiseasesRouter.delete("/:id", ChronicDiseasesController.deleteRecord);

export default ChronicDiseasesRouter;
