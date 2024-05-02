import DefaultController from "./DefaultControllers/DefaultByGroupController.js";
import ProblemFamilyRepository from "../../repositories/SocialPassport/ProblemFamilyRepository.js";

const ProblemFamilyController = new DefaultController(ProblemFamilyRepository);

export default ProblemFamilyController;
