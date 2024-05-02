import { Router } from "express";
import CharacteristicController from "../../controllers/Profile/CharacteristicController.js";

const characteristicRouter = Router();

characteristicRouter.get(
  "/:studentId",
  CharacteristicController.getStudentCharacteristicByStudentId
);

characteristicRouter.put(
  "/attitudes/:studentId",
  CharacteristicController.updateStudentAttitudesByStudentId
);

characteristicRouter.put(
  "/personality/:studentId",
  CharacteristicController.updateStudentPersonalityByStudentId
);

export default characteristicRouter;
