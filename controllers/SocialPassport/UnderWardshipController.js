import DefaultController from "./DefaultControllers/DefaultController.js";
import UnderWardshipRepository from "../../repositories/SocialPassport/UnderWardshipRepository.js";

const UnderWardshipController = new DefaultController(UnderWardshipRepository);

export default UnderWardshipController;
