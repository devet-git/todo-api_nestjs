import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoModule } from './modules/todos/todo.module';
import { UserModule } from './modules/users/user.module';
import { User } from './modules/users/user.entity';
import { ResponseFormatMiddleware } from './middlewares/response-format.middleware';
import { FactoryModule } from './factories/factory.module';
import { ConfigModule } from '@nestjs/config';
import appProviders from './app.provider';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TodoModule,
    UserModule,
    FactoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_UNAME,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  providers: appProviders,
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseFormatMiddleware).forRoutes('*');
  }
}
