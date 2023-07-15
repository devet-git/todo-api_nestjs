import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const swaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('TODO APIs')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
};
export default swaggerConfig;
