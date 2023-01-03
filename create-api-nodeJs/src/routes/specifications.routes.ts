import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  return createSpecificationController.execute(request, response);
});

export { specificationsRouter };
