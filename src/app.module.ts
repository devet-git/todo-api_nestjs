import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todos/todo.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [TodoModule, UserModule],
})
export class AppModule {}
