import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoModule } from './modules/todos/todo.module';
import { UserModule } from './modules/users/user.module';
import { User } from './modules/users/user.entity';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ResponseFormatMiddleware } from './middlewares/response-format.middleware';
import { ResponseFactory } from './factories/response.factory';
import { FactoryModule } from './factories/factory.module';

@Module({
  imports: [
    TodoModule,
    UserModule,
    FactoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '466662%2073637#deveT',
      database: 'db_todo_nestjs',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseFormatMiddleware).forRoutes('*');
  }
}
