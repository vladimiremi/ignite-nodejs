import { Router } from "express";

import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();

const categoriesRepository = new PostgresCategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const category = createCategoryService.execute({ name, description });

  return response.status(200).json(category);
});

categoriesRouter.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRouter };
