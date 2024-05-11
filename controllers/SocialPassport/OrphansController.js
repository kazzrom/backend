import OrphansRepository from "../../repositories/SocialPassport/OrphansRepository.js";

class OrphansController {
  static async getRecords(req, res) {
    try {
      const response = await OrphansRepository.getRecords(req.groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default OrphansController;
