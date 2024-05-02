import getDefaultRouter from "./DefaultRouters/DefaultRouter.js";
import IncompleteFamilyController from "../../controllers/SocialPassport/IncompleteFamilyController.js";

const IncompleteFamilyRouter = getDefaultRouter(IncompleteFamilyController);

export default IncompleteFamilyRouter;
