import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../model/Category";

const categoriesRouter = Router();

const categories: Category[] = [];

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const category: Category = {
    name,
    description,
    id: uuidV4(),
    created_at: new Date(),
  };

  categories.push(category);
  return response.status(200).json(category);
});

export { categoriesRouter };
