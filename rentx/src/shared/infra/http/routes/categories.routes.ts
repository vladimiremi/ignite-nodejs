import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import ensuredAdmin from "../middlewares/ensuredAdmin";

const categoriesRouter = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouter.post(
  "/",
  ensureAuthenticated,
  ensuredAdmin,
  createCategoryController.handle
);

categoriesRouter.get("/", listCategoriesController.handle);

categoriesRouter.post(
  "/import",
  ensureAuthenticated,
  ensuredAdmin,
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRouter };
