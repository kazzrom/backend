import getDefaultRouter from "./DefaultRouters/DefaultByGroupRouter.js";
import RegisteredOPPNController from "../../controllers/SocialPassport/RegisteredOPPNController.js";

const RegisteredOPPNRouter = getDefaultRouter(RegisteredOPPNController);

export default RegisteredOPPNRouter;
