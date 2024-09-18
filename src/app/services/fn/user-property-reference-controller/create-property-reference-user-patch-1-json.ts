/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelAddress } from '../../models/collection-model-address';
import { CollectionModelObject } from '../../models/collection-model-object';

export interface CreatePropertyReferenceUserPatch1$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceUserPatch1$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceUserPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceUserPatch1$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
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

createPropertyReferenceUserPatch1$Json.PATH = '/users/{id}/addresses';
