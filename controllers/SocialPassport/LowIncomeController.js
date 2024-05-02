import DefaultController from "./DefaultControllers/DefaultByGroupController.js";
import LowIncomeRepository from "../../repositories/SocialPassport/LowIncomeRepository.js";

const LowIncomeController = new DefaultController(LowIncomeRepository);

export default LowIncomeController;
