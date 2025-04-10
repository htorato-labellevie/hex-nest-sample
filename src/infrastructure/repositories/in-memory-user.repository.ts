import { UserRepositoryPort } from '../../domain/ports/user-repository.port';
import { User } from '../../domain/entities/user.entity';

export class InMemoryUserRepository implements UserRepositoryPort {
  private users = [new User(1, 'Alice'), new User(2, 'Bob')];

  async findUserById(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }
}
