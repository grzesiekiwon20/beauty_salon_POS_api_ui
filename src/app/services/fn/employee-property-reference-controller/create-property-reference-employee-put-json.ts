/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelActivity } from '../../models/collection-model-activity';
import { CollectionModelObject } from '../../models/collection-model-object';

export interface CreatePropertyReferenceEmployeePut$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceEmployeePut$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceEmployeePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceEmployeePut$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelActivity>;
    })
  );
}

createPropertyReferenceEmployeePut$Json.PATH = '/employees/{id}/activities';
