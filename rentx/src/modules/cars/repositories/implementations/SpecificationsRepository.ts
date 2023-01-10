import { getRepository, Repository } from "typeorm";
import { Specifications } from "../../entities/Specifications";
import {
  ISpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

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

    return specification;
  }
}

export { SpecificationsRepository };
