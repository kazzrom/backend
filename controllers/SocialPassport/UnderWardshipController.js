import UnderWardshipRepository from "../../repositories/SocialPassport/UnderWardshipRepository.js";

class UnderWardshipController {
  static async getRecords(req, res) {
    try {
      const response = await UnderWardshipRepository.getRecords(req.groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default UnderWardshipController;
