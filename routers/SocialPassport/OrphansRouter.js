import getDefaultRouter from "./DefaultRouters/DefaultRouter.js";
import OrphansController from "../../controllers/SocialPassport/OrphansController.js";

const OrphansRouter = getDefaultRouter(OrphansController);

export default OrphansRouter;
