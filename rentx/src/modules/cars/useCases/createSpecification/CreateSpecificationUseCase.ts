import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists");
    }

    const specification = await this.specificationsRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export { CreateSpecificationUseCase };
