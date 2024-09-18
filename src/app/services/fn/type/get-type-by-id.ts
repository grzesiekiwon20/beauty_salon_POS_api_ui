/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TypeResponse } from '../../models/type-response';

export interface GetTypeById$Params {
  id: number;
}

export function getTypeById(http: HttpClient, rootUrl: string, params: GetTypeById$Params, context?: HttpContext): Observable<StrictHttpResponse<TypeResponse>> {
  const rb = new RequestBuilder(rootUrl, getTypeById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TypeResponse>;
    })
  );
}

getTypeById.PATH = '/types/typeId/{id}';
