import DefaultController from "./DefaultControllers/DefaultByGroupController.js";
import ChronicDiseasesRepository from "../../repositories/SocialPassport/ChronicDiseasesRepository.js";

const ChronicDiseasesController = new DefaultController(
  ChronicDiseasesRepository
);

export default ChronicDiseasesController;
