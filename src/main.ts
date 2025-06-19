import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.enableCors({
    origin: 'http://localhost:3000', // hoặc domain FE
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
