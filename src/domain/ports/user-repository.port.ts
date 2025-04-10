import { User } from '../entities/user.entity';

export interface UserRepositoryPort {
  findUserById(id: number): Promise<User | null>;
}
