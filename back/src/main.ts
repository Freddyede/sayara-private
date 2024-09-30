import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:5173/', 'http://localhost:5173/*'],
    },
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap().then();
