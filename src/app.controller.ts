import { Controller, Get } from '@nestjs/common';
import { HomeController } from './home/home.controller';
import { AboutController } from './home/about.controller';

@Controller()
export class AppController {
  controllers = [HomeController,AboutController];
}
