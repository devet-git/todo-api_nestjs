import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerConfig from './config/swagger.config';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  swaggerConfig(app);

  await app.listen(8080);
  console.log(`API documents is running on: http://localhost:8080/api-docs`);
}
bootstrap();
