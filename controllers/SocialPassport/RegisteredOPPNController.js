import RegisteredOPPNRepository from "../../repositories/SocialPassport/RegisteredOPPNRepository.js";

class RegisteredOPPNController {
  static async getRecords(req, res) {
    try {
      const response = await RegisteredOPPNRepository.getRecordsByGroupId(
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
      const response = await RegisteredOPPNRepository.createRecord(req.body);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      await RegisteredOPPNRepository.deleteRecord(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export default RegisteredOPPNController;
