import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

import { Parser } from './utils/parser';

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
      .pipe(
        map((response) =>
          Parser.parseJSONRecursively(response.data.response.result),
        ),
      );
  }
}
