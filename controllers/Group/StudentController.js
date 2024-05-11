import StudentService from "../../services/Group/StudentService.js";

export default class StudentController {
  static async getAllStudentByGroupId(req, res) {
    try {
      console.log("getAllStudentByGroupId");
      console.log(req.groupId);
      const response = await StudentService.getAllStudentByGroupId(req.groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async getStudentById(req, res) {
    try {
      const { id } = req.params;
      const response = await StudentService.getStudentById(id);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createStudent(req, res) {
    try {
      console.log("createStudent");
      console.log(req.groupId);
      await StudentService.createStudent({
        data: req.body,
        groupId: req.groupId,
      });
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateStudent(req, res) {
    try {
      const { id } = req.params;
      await StudentService.updateStudent({ id, data: req.body });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteStudent(req, res) {
    try {
      const { id } = req.params;
      await StudentService.deleteStudent(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
