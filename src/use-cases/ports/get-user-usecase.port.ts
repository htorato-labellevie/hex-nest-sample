import { User } from '../../domain/entities/user.entity';

export interface GetUserUseCasePort {
    execute(id: number): Promise<User | null>;
  }
  