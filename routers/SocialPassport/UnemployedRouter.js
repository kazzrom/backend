import getDefaultRouter from "./DefaultRouters/DefaultByGroupRouter.js";
import UnemployedController from "../../controllers/SocialPassport/UnemployedController.js";

const UnemployedRouter = getDefaultRouter(UnemployedController);

export default UnemployedRouter;
