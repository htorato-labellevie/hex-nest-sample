import { UserRepositoryPort } from '../domain/ports/user-repository.port';

export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(id: number) {
    return this.userRepository.findUserById(id);
  }
}
