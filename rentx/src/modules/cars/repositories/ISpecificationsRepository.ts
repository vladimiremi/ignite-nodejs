import { Specifications } from "../entities/Specifications";

interface ISpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {
  create({ name, description }: ISpecificationDTO): Specifications;
  findByName(name: string): Specifications;
}

export { ISpecificationsRepository, ISpecificationDTO };
