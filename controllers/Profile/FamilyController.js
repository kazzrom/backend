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
      return ErrorUtils.catchError(res, error);
    }
  }

  static async getFamilyMemberById(req, res) {
    try {
      const { id } = req.params;
      const response = await FamilyService.getFamilyMemberById(id);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createFamilyMember(req, res) {
    try {
      const response = await FamilyService.createFamilyMember(req.body);
      res.status(201).json(response);
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
