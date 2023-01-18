import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import ensuredAdmin from "../middlewares/ensuredAdmin";

const carsRouters = Router();

const createCarController = new CreateCarController();

carsRouters.post(
  "/",
  ensureAuthenticated,
  ensuredAdmin,
  createCarController.handle
);

export { carsRouters };
