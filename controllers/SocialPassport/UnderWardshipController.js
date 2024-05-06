import UnderWardshipRepository from "../../repositories/SocialPassport/UnderWardshipRepository.js";

class UnderWardshipController {
  static async getRecords(req, res) {
    try {
      const { groupId } = req.params;
      const response = await UnderWardshipRepository.getRecords(groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default UnderWardshipController;
