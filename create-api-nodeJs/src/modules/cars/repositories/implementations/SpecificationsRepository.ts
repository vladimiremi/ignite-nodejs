import { Specifications } from "../../model/Specifications";
import {
  ISpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specifications[];

  constructor() {
    this.specifications = [];
  }
  findByName(name: string): Specifications {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }

  create({ name, description }: ISpecificationDTO) {
    const specification = new Specifications();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }
}

export { SpecificationsRepository };
