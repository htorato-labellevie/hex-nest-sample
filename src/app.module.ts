import { Module } from '@nestjs/common';
import { UserController } from './adapters/controllers/user.controller';

@Module({
  controllers: [UserController],
})
export class AppModule {}
