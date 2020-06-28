import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  {cors: true} ); //poner cors
  app.setGlobalPrefix('api');
  await app.listen(AppModule.port);
  app.use(helmet());
  app.use(compression());
  app.use(csurf());
  app.use(rateLimit({
    windowMs: 15*60*1000, max: 100
  }));
}
bootstrap();
