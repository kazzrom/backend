import FamilyService from "../../services/Profile/FamilyService.js";

export default class FamilyController {
  static async getAllFamilyMembersByStudentId(req, res) {
    try {
      const response = await FamilyService.getAllFamilyMembersByStudentId(
        req.params.studentId
      );

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createFamilyMember(req, res) {
    try {
      await FamilyService.createFamilyMember(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateFamilyMember(req, res) {
    try {
      const { id } = req.params;
      await FamilyService.updateFamilyMember({ id, data: req.body });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteFamilyMember(req, res) {
    try {
      const { id } = req.params;
      await FamilyService.deleteFamilyMember(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}