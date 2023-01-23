import { getRepository, Repository } from "typeorm";

import {
  ISpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";

import { Specifications } from "../entities/Specifications";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specifications>;
  constructor() {
    this.repository = getRepository(Specifications);
  }

  async findByName(name: string): Promise<Specifications> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }

  async create({
    name,
    description,
  }: ISpecificationDTO): Promise<Specifications> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specifications[]> {
    const specifications = await this.repository.findByIds(ids);

    return specifications;
  }
}

export { SpecificationsRepository };
