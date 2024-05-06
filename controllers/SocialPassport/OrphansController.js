import OrphansRepository from "../../repositories/SocialPassport/OrphansRepository.js";

class OrphansController {
  static async getRecords(req, res) {
    try {
      const { groupId } = req.params;
      const response = await OrphansRepository.getRecords(groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default OrphansController;
