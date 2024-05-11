import ChronicDiseasesRepository from "../../repositories/SocialPassport/ChronicDiseasesRepository.js";

class ChronicDiseasesController {
  static async getRecords(req, res) {
    try {
      const response = await ChronicDiseasesRepository.getRecordsByGroupId(
        req.groupId
      );
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createRecord(req, res) {
    try {
      const response = await ChronicDiseasesRepository.createRecord(req.body);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      await ChronicDiseasesRepository.deleteRecord(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default ChronicDiseasesController;
