import { Router } from "express";

const categoriesRouter = Router();

const categories = [];

categoriesRouter.post("/categories", (request, response) => {
  const { name, description } = request.body;
  categories.push({
    name,
    description,
  });
  return response.status(200).send();
});

export { categoriesRouter };
