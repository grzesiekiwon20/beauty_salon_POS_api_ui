/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelUser } from '../../models/entity-model-user';
import { UserResponse } from '../../models/user-response';

export interface GetItemResourceUserGet1$Params {
  id: string;
}

export function getItemResourceUserGet1(http: HttpClient, rootUrl: string, params: GetItemResourceUserGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<(UserResponse | EntityModelUser)>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceUserGet1.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<(UserResponse | EntityModelUser)>;
    })
  );
}

getItemResourceUserGet1.PATH = '/users/{id}';
