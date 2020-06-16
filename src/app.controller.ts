import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Hola Ingeniero Jaime Calamani mamani"
    //return this.appService.getHello();
  }
}
