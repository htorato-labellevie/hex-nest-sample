import { Controller, Get, Param } from '@nestjs/common';
import { GetUserUseCase } from '../../use-cases/get-user.usecase';
import { InMemoryUserRepository } from '../../infrastructure/repositories/in-memory-user.repository';

@Controller('users')
export class UserController {
  private readonly getUserUseCase = new GetUserUseCase(new InMemoryUserRepository());

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.getUserUseCase.execute(Number(id));
    return user ? user : { message: 'User not found' };
  }
}
