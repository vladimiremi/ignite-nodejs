import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}

export { UserRepository };
