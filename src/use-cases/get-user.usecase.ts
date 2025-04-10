import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryPort } from '../domain/ports/user-repository.port';
import { User } from '../domain/entities/user.entity';
import { GetUserUseCasePort } from './ports/get-user-usecase.port';


@Injectable()
export class GetUserUseCase implements GetUserUseCasePort {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepositoryPort,
  ) {}

  async execute(id: number): Promise<User | null> {
    return this.userRepository.findUserById(id);
  }
}
