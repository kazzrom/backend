import LowIncomeRepository from "../../repositories/SocialPassport/LowIncomeRepository.js";

class LowIncomeController {
  static async getRecords(req, res) {
    try {
      const { groupId } = req.params;
      const response = await LowIncomeRepository.getRecordsByGroupId(groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createRecord(req, res) {
    try {
      const response = await LowIncomeRepository.createRecord(req.body);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      await LowIncomeRepository.deleteRecord(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default LowIncomeController;
