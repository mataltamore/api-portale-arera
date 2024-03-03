import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getAnagraficaLuce(cookie: string) {
    const url =
      'https://www.consumienergia.it/portaleConsumi/legacyapi/rs/it/fornitureElettricheService.json';

    return this.httpService
      .get(url, {
        headers: {
          Cookie: cookie,
        },
      })
      .pipe(map((response) => response.data));
  }
}
