import DefaultController from "./DefaultControllers/DefaultController.js";
import IncompleteFamilyRepository from "../../repositories/SocialPassport/IncompleteFamilyRepository.js";

const IncompleteFamilyController = new DefaultController(
  IncompleteFamilyRepository
);

export default IncompleteFamilyController;
