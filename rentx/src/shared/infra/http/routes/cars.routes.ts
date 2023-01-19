import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableController } from "@modules/cars/useCases/listAvailableCars/listAvailableCarsController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import ensuredAdmin from "../middlewares/ensuredAdmin";

const carsRouters = Router();

const createCarController = new CreateCarController();
const listAvailableController = new ListAvailableController();

carsRouters.post(
  "/",
  ensureAuthenticated,
  ensuredAdmin,
  createCarController.handle
);

carsRouters.get("/available", listAvailableController.handle);

export { carsRouters };
