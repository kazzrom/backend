import LargeFamilyRepository from "../../repositories/SocialPassport/LargeFamilyRepository.js";

export default class LargeFamilyController {
  static async getRecords(req, res) {
    try {
      const response = await LargeFamilyRepository.getRecordsByGroupId(
        req.groupId
      );
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
