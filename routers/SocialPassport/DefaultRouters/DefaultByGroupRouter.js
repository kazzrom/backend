import { Router } from "express";

export default function getDefaultByGroupRouter(controller) {
  const defaultByGroupRouter = Router();

  defaultByGroupRouter.get("/:groupId", controller.getRecords);
  defaultByGroupRouter.post("/", controller.createRecord);
  defaultByGroupRouter.put("/:id", controller.updateRecord);
  defaultByGroupRouter.delete("/:id", controller.deleteRecord);

  return defaultByGroupRouter;
}
