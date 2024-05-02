import getDefaultRouter from "./DefaultRouters/DefaultByGroupRouter.js";
import ProblemFamilyController from "../../controllers/SocialPassport/ProblemFamilyController.js";

const ProblemFamilyRouter = getDefaultRouter(ProblemFamilyController);

export default ProblemFamilyRouter;
