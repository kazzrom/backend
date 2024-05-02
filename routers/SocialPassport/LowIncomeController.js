import getDefaultRouter from "./DefaultRouters/DefaultByGroupRouter.js";
import LowIncomeController from "../../controllers/SocialPassport/LowIncomeController.js";

const LowIncomeRouter = getDefaultRouter(LowIncomeController);

export default LowIncomeRouter;
