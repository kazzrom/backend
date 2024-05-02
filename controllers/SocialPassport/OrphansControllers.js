import DefaultController from "./DefaultControllers/DefaultController.js";
import OrphansRepository from "../../repositories/SocialPassport/OrphansRepository.js";

const OrphansController = new DefaultController(OrphansRepository);

export default OrphansController;
