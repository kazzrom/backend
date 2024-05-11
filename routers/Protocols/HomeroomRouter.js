import { Router } from "express";
import HomeroomController from "../../controllers/Protocols/HomeroomController.js";

const homeroomRouter = Router();

homeroomRouter.get("/", HomeroomController.getProtocolsByGroupId);
homeroomRouter.post("/", HomeroomController.createProtocol);
homeroomRouter.put("/:id", HomeroomController.updateProtocol);
homeroomRouter.delete("/:id", HomeroomController.deleteProtocol);

export default homeroomRouter;
