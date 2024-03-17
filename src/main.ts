import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import path, { join } from 'path';
import * as hbs from 'hbs';
import { NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
 
  app.useStaticAssets(`./src/publi`);
  
  //app.setBaseViewsDir( './src/views/2siraq');

  //app.useStaticAssets(join(__dirname, '..','src', 'publi'));
  app.setBaseViewsDir(join(__dirname, '..','src', 'views','2siraq'));
  app.setViewEngine('hbs');

  
  app.setViewEngine('hbs');
  await app.listen(process.env.Port||3000);
}
bootstrap();
