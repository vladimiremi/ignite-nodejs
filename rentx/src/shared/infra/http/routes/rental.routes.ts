import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateCarController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);

export { rentalRoutes };
