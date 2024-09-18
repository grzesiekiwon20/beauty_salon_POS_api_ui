/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelActivity } from '../../models/collection-model-activity';

export interface CreatePropertyReferenceEmployeePatch$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceEmployeePatch$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceEmployeePatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceEmployeePatch$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
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

createPropertyReferenceEmployeePatch$UriList.PATH = '/employees/{id}/activities';
