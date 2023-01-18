import { Router } from "express";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import ensuredAdmin from "../middlewares/ensuredAdmin";

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRouter.post(
  "/",
  ensureAuthenticated,
  ensuredAdmin,
  createSpecificationController.handle
);

export { specificationsRouter };
