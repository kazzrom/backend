import { Router } from "express";
import ChronicDiseasesRouter from "./ChronicDiseasesRouter.js";
import DisabledParentRouter from "./DisabledParentRouter.js";
import IncompleteFamilyRouter from "./IncompleteFamilyRouter.js";
import LowIncomeRouter from "./LowIncomeRouter.js";
import OrphansRouter from "./OrphansRouter.js";
import ProblemFamilyRouter from "./ProblemFamilyRouter.js";
import RegisteredOPPNRouter from "./RegisteredOPPNRouter.js";
import UnderWardshipRouter from "./UnderWardshipRouter.js";
import UnemployedRouter from "./UnemployedRouter.js";
import StudentsWithFamilyController from "../../controllers/SocialPassport/StudentWithFamilyController.js";

const socialPassportRouter = Router();

socialPassportRouter.use("/chronic-diseases", ChronicDiseasesRouter);
socialPassportRouter.use("/disabled-parents", DisabledParentRouter);
socialPassportRouter.use("/incomplete-families", IncompleteFamilyRouter);
socialPassportRouter.use("/low-income-families", LowIncomeRouter);
socialPassportRouter.use("/orphans", OrphansRouter);
socialPassportRouter.use("/problem-families", ProblemFamilyRouter);
socialPassportRouter.use("/students-registered-oppn", RegisteredOPPNRouter);
socialPassportRouter.use("/under-wardships", UnderWardshipRouter);
socialPassportRouter.use("/unemployed-parents", UnemployedRouter);

socialPassportRouter.get(
  "/students-with-parents/:groupId",
  StudentsWithFamilyController
);

export default socialPassportRouter;
