import DefaultController from "./DefaultControllers/DefaultByGroupController.js";
import UnemployedRepository from "../../repositories/SocialPassport/UnemployedRepository.js";

const UnemployedController = new DefaultController(UnemployedRepository);

export default UnemployedController;
