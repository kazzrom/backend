import IndividualWorkService from "../../services/Profile/IndividualWorkService.js";

export default class IndividualWorkController {
  static async getAllIndividualWorkByStudentId(req, res) {
    try {
      const response =
        await IndividualWorkService.getAllIndividualWorkByStudentId(
          req.params.studentId
        );

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createIndividualWork(req, res) {
    try {
      await IndividualWorkService.createIndividualWork(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateIndividualWork(req, res) {
    try {
      const { id } = req.params;
      await IndividualWorkService.updateIndividualWork({ id, data: req.body });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteIndividualWork(req, res) {
    try {
      const { id } = req.params;
      await IndividualWorkService.deleteIndividualWork(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
