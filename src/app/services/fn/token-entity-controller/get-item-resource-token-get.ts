/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelToken } from '../../models/entity-model-token';

export interface GetItemResourceTokenGet$Params {
  id: string;
}

export function getItemResourceTokenGet(http: HttpClient, rootUrl: string, params: GetItemResourceTokenGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelToken>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceTokenGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getItemResourceTokenGet.PATH = '/tokens/{id}';
