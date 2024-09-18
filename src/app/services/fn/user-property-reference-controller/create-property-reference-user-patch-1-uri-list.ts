/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelAddress } from '../../models/collection-model-address';

export interface CreatePropertyReferenceUserPatch1$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceUserPatch1$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceUserPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceUserPatch1$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelAddress>;
    })
  );
}

createPropertyReferenceUserPatch1$UriList.PATH = '/users/{id}/addresses';
