import GeneralInformationRepository from "../../repositories/SocialPassport/GeneralInformationRepository.js";

export default class GeneralInformationController {
  static async getGeneralInformation(req, res) {
    try {
      const generalInformation =
        await GeneralInformationRepository.getGeneralInformation(req.groupId);

      res.status(200).json(generalInformation);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
