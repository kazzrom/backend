import IncompleteFamilyRepository from "../../repositories/SocialPassport/IncompleteFamilyRepository.js";

class IncompleteFamilyController {
  static async getRecords(req, res) {
    try {
      const { groupId } = req.params;
      const response = await IncompleteFamilyRepository.getRecords(groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default IncompleteFamilyController;
