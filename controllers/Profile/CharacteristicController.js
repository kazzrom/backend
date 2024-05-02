import CharacteristicService from "../../services/Profile/СharacteristicService.js";

export default class CharacteristicController {
  static async getStudentCharacteristicByStudentId(req, res) {
    try {
      const { studentId } = req.params;
      const response =
        await CharacteristicService.getStudentCharacteristicByStudentId(
          studentId
        );
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateStudentAttitudesByStudentId(req, res) {
    try {
      const { studentId } = req.params;
      await CharacteristicService.updateStudentAttitudesByStudentId({
        studentId,
        data: req.body,
      });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateStudentPersonalityByStudentId(req, res) {
    try {
      const { studentId } = req.params;
      await CharacteristicService.updateStudentPersonalityByStudentId({
        studentId,
        data: req.body,
      });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
