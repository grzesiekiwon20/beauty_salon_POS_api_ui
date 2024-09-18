/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelActivity } from '../../models/entity-model-activity';

export interface GetItemResourceActivityGet$Params {
  id: string;
}

export function getItemResourceActivityGet(http: HttpClient, rootUrl: string, params: GetItemResourceActivityGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelActivity>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceActivityGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelActivity>;
    })
  );
}

getItemResourceActivityGet.PATH = '/activities/{id}';
