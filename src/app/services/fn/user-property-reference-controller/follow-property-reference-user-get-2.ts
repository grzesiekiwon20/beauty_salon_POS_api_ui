/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelAddress } from '../../models/collection-model-address';

export interface FollowPropertyReferenceUserGet2$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceUserGet2(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceUserGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceUserGet2.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceUserGet2.PATH = '/users/{id}/addresses/{propertyId}';
