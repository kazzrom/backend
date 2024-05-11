import { Router } from "express";
import StudentController from "../../controllers/Group/StudentController.js";
import TokenService from "../../services/Auth/Token.js";

const studentRouter = Router();

studentRouter.get(
  "/",
  TokenService.checkAccess,
  StudentController.getAllStudentByGroupId
);
studentRouter.get("/:id", StudentController.getStudentById);
studentRouter.post(
  "/",
  TokenService.checkAccess,
  StudentController.createStudent
);
studentRouter.put("/:id", StudentController.updateStudent);
studentRouter.delete("/:id", StudentController.deleteStudent);

export default studentRouter;
