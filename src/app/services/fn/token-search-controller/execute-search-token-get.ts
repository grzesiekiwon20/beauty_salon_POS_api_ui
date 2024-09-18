/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelToken } from '../../models/entity-model-token';

export interface ExecuteSearchTokenGet$Params {
  token?: string;
}

export function executeSearchTokenGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchTokenGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelToken>> {
  const rb = new RequestBuilder(rootUrl, executeSearchTokenGet.PATH, 'get');
  if (params) {
    rb.query('token', params.token, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelToken>;
    })
  );
}

executeSearchTokenGet.PATH = '/tokens/search/findByToken';
