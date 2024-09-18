/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelEmployee } from '../../models/entity-model-employee';

export interface GetItemResourceEmployeeGet$Params {
  id: string;
}

export function getItemResourceEmployeeGet(http: HttpClient, rootUrl: string, params: GetItemResourceEmployeeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmployee>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceEmployeeGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelEmployee>;
    })
  );
}

getItemResourceEmployeeGet.PATH = '/employees/{id}';
