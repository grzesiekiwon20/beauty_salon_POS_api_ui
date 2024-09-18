/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelToken } from '../../models/entity-model-token';
import { TokenRequestBody } from '../../models/token-request-body';

export interface PutItemResourceTokenPut$Params {
  id: string;
      body: TokenRequestBody
}

export function putItemResourceTokenPut(http: HttpClient, rootUrl: string, params: PutItemResourceTokenPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelToken>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceTokenPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

putItemResourceTokenPut.PATH = '/tokens/{id}';
