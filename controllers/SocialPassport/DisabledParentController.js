import DefaultController from "./DefaultControllers/DefaultByGroupController.js";
import DisabledParentRepository from "../../repositories/SocialPassport/DisabledParentRepository.js";

const DisabledParentController = new DefaultController(
  DisabledParentRepository
);

export default DisabledParentController;
