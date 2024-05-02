import { Router } from "express";

export default function getDefaultRouter(controller) {
  const defaultRouter = Router();
  defaultRouter.get("/:groupId", controller.getRecords);
  return defaultRouter;
}
