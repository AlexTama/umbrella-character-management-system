import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function configureOpenAPIDocumentation(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Umbrella Character Management System API')
    .setDescription(
      'API documentation for managing Umbrella Corporation characters',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureOpenAPIDocumentation(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
