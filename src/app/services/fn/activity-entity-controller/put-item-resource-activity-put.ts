/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityRequestBody } from '../../models/activity-request-body';
import { EntityModelActivity } from '../../models/entity-model-activity';

export interface PutItemResourceActivityPut$Params {
  id: string;
      body: ActivityRequestBody
}

export function putItemResourceActivityPut(http: HttpClient, rootUrl: string, params: PutItemResourceActivityPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelActivity>> {
  const rb = new RequestBuilder(rootUrl, putItemResourceActivityPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

putItemResourceActivityPut.PATH = '/activities/{id}';
