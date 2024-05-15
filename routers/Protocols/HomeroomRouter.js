import { Router } from "express";
import HomeroomController from "../../controllers/Protocols/HomeroomController.js";
import TokenService from "../../services/Auth/Token.js";

const homeroomRouter = Router();

homeroomRouter.get(
  "/",
  TokenService.checkAccess,
  HomeroomController.getProtocolsByGroupId
);
homeroomRouter.post(
  "/",
  TokenService.checkAccess,
  HomeroomController.createProtocol
);
homeroomRouter.put("/:id", HomeroomController.updateProtocol);
homeroomRouter.delete("/:id", HomeroomController.deleteProtocol);

export default homeroomRouter;
