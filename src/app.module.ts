import { Module } from '@nestjs/common';
import { UserController } from './adapters/controllers/user.controller';
import { GetUserUseCase } from './use-cases/get-user.usecase';
import { InMemoryUserRepository } from './infrastructure/repositories/in-memory-user.repository';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'GetUserUseCasePort',
      useClass: GetUserUseCase,
    },
    {
      provide: 'UserRepository',
      useClass: InMemoryUserRepository,
    },
  ],
})
export class AppModule {}
