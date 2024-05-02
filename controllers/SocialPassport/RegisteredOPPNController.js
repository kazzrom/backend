import DefaultController from "./DefaultControllers/DefaultByGroupController.js";
import RegisteredOPPNRepository from "../../repositories/SocialPassport/RegisteredOPPNRepository.js";

const RegisteredOPPNController = new DefaultController(
  RegisteredOPPNRepository
);

export default RegisteredOPPNController;
