import getDefaultRouter from "./DefaultRouters/DefaultByGroupRouter.js";
import ChronicDiseasesController from "../../controllers/SocialPassport/ChronicDiseasesController.js";

const ChronicDiseasesRouter = getDefaultRouter(
  ChronicDiseasesController
);

export default ChronicDiseasesRouter;
