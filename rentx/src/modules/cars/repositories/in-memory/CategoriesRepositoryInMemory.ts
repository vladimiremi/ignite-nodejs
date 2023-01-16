import { Category } from "../../infra/typeorm/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
  async list(): Promise<Category[]> {
    const all = this.categories;
    return all;
  }
  async create({ description, name }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      description,
      name,
    });

    this.categories.push(category);

    return category;
  }
}

export { CategoriesRepositoryInMemory };
