/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TypeResponse } from '../../models/type-response';

export interface GetAllTypes$Params {
}

export function getAllTypes(http: HttpClient, rootUrl: string, params?: GetAllTypes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TypeResponse>>> {
  const rb = new RequestBuilder(rootUrl, getAllTypes.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TypeResponse>>;
    })
  );
}

getAllTypes.PATH = '/types/all';
