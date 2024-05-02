import getDefaultRouter from "./DefaultRouters/DefaultByGroupRouter.js";
import DisabledParentController from "../../controllers/SocialPassport/DisabledParentController.js";

const DisabledParentRouter = getDefaultRouter(DisabledParentController);

export default DisabledParentRouter;
