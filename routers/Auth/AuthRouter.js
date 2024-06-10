import { Router } from "express";
import AuthController from "../../controllers/Auth/AuthController.js";

const router = Router();

router.post("/sign-up", AuthController.signUp);
router.post("/sign-in", AuthController.signIn);
router.post("/logout", AuthController.logOut);
router.post("/refresh", AuthController.refresh);

export default router;
