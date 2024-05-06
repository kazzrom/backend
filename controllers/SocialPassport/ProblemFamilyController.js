import ProblemFamilyRepository from "../../repositories/SocialPassport/ProblemFamilyRepository.js";

class ProblemFamilyController {
  static async getRecords(req, res) {
    try {
      const { groupId } = req.params;
      const response = await ProblemFamilyRepository.getRecordsByGroupId(
        groupId
      );
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createRecord(req, res) {
    try {
      const response = await ProblemFamilyRepository.createRecord(req.body);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      await ProblemFamilyRepository.deleteRecord(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default ProblemFamilyController;
