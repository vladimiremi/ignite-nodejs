import multer from "multer";
import { Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificatioController";
import { ListAvailableController } from "@modules/cars/useCases/listAvailableCars/listAvailableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import ensuredAdmin from "../middlewares/ensuredAdmin";
import uploadConfig from "@configs/upload";

const carsRouters = Router();

const createCarController = new CreateCarController();
const listAvailableController = new ListAvailableController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

carsRouters.post(
  "/",
  ensureAuthenticated,
  ensuredAdmin,
  createCarController.handle
);

carsRouters.get("/available", listAvailableController.handle);

carsRouters.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensuredAdmin,
  createCarSpecificationController.handle
);

carsRouters.post(
  "/images/:id",
  ensureAuthenticated,
  ensuredAdmin,
  upload.array("images"),
  uploadCarImagesController.handle
);

export { carsRouters };
