import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('anagrafica/luce')
  getAnagraficaLuce(@Headers('Cookie') cookie: string) {
    return this.appService.getAnagraficaLuce(cookie);
  }
}
