import { Router } from "express";
import StudentController from "../../controllers/Group/StudentController.js";
import { checkGroupId } from "../../middlewares/GroupMiddleware.js";

const studentRouter = Router();

studentRouter.get("/", checkGroupId, StudentController.getAllStudentByGroupId);
studentRouter.get("/:id", StudentController.getStudentById);
studentRouter.post("/", StudentController.createStudent);
studentRouter.put("/:id", StudentController.updateStudent);
studentRouter.delete("/:id", StudentController.deleteStudent);

export default studentRouter;
