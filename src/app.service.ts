import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';

import { Parser } from './utils/parser';
import {
  ANAGRAFICA_LUCE_URL,
  ANAGRAFICA_GAS_URL,
  CONSUMI_LUCE_URL,
  CONSUMI_GAS_URL,
} from './utils/urls';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  private getData(
    url: string,
    cookie: string,
    queryParams?: any,
  ): Observable<any> {
    return this.httpService
      .get(url, {
        headers: {
          Cookie: cookie,
        },
        params: queryParams,
      })
      .pipe(
        map((response: AxiosResponse) =>
          Parser.parseJSONRecursively(response.data.response.result),
        ),
      );
  }

  getAnagraficaLuce(cookie: string) {
    const url = ANAGRAFICA_LUCE_URL;
    return this.getData(url, cookie);
  }

  getAnagraficaGas(cookie: string) {
    const url = ANAGRAFICA_GAS_URL;
    return this.getData(url, cookie);
  }

  getConsumiLuce(cookie: string, pod: string) {
    const url = CONSUMI_LUCE_URL;
    return this.getData(url, cookie, { code: pod });
  }

  getConsumiGas(cookie: string, pdr: string) {
    const url = CONSUMI_GAS_URL;
    return this.getData(url, cookie, { code: pdr });
  }
}
