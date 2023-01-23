import { Specifications } from "../infra/typeorm/entities/Specifications";

interface ISpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationsRepository {
  create({ name, description }: ISpecificationDTO): Promise<Specifications>;
  findByName(name: string): Promise<Specifications>;
  findByIds(ids: string[]): Promise<Specifications[]>;
}

export { ISpecificationsRepository, ISpecificationDTO };
