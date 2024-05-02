import { Router } from "express";
import CharacteristicRouter from "./CharacteristicRouter.js";
import FamilyRouter from "./FamilyRouter.js";
import IndividualWorkRouter from "./IndividualWorkRouter.js";

const profileRouter = Router();

profileRouter.use("/characteristics", CharacteristicRouter);
profileRouter.use("/families", FamilyRouter);
profileRouter.use("/individual-works", IndividualWorkRouter);

export default profileRouter;
