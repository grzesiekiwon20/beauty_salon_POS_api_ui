/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelAddress } from '../../models/entity-model-address';

export interface GetItemResourceAddressGet$Params {
  id: string;
}

export function getItemResourceAddressGet(http: HttpClient, rootUrl: string, params: GetItemResourceAddressGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceAddressGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelAddress>;
    })
  );
}

getItemResourceAddressGet.PATH = '/addresses/{id}';
