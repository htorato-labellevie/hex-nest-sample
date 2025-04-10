import { Controller, Get, Param } from '@nestjs/common';
import { GetUserUseCasePort } from '../../use-cases/ports/get-user-usecase.port';
import { Inject } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(
    @Inject('GetUserUseCasePort') private readonly getUserUseCase: GetUserUseCasePort
  ) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.getUserUseCase.execute(Number(id));
    return user ? user : { message: 'User not found' };
  }
}
