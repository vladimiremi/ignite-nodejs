import { Specifications } from "@modules/cars/infra/typeorm/entities/Specifications";
import {
  ISpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specifications[] = [];

  async create({
    name,
    description,
  }: ISpecificationDTO): Promise<Specifications> {
    const specification = new Specifications();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specifications> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  async findByIds(ids: string[]): Promise<Specifications[]> {
    const specifications = this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );
    return specifications;
  }
}

export { SpecificationsRepositoryInMemory };
