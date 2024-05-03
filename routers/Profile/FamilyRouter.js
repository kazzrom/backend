import { Router } from "express";
import FamilyController from "../../controllers/Profile/FamilyController.js";

const familyRouter = Router();

familyRouter.get(
  "/:studentId",
  FamilyController.getAllFamilyMembersByStudentId
);

familyRouter.post("/", FamilyController.createFamilyMember);

familyRouter.get("/family-members/:id", FamilyController.getFamilyMemberById);

familyRouter.put("/family-members/:id", FamilyController.updateFamilyMember);

familyRouter.delete("/family-members/:id", FamilyController.deleteFamilyMember);

export default familyRouter;
