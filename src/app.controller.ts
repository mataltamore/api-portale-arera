import { Controller, Get, Headers, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('anagrafica/luce')
  getAnagraficaLuce(@Headers('Cookie') cookie: string) {
    return this.appService.getAnagraficaLuce(cookie);
  }

  @Get('anagrafica/gas')
  getAnagraficaGas(@Headers('Cookie') cookie: string) {
    return this.appService.getAnagraficaGas(cookie);
  }

  @Get('consumi/luce')
  getCOnsumiLuce(@Headers('Cookie') cookie: string, @Query('pod') pod: string) {
    return this.appService.getConsumiLuce(cookie, pod);
  }

  @Get('consumi/gas')
  getConsumiGas(@Headers('Cookie') cookie: string, @Query('pdr') pdr: string) {
    return this.appService.getConsumiGas(cookie, pdr);
  }
}
