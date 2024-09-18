/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelAddress } from '../../models/collection-model-address';

export interface FollowPropertyReferenceUserGet21$Json$Params {
  id: string;
}

export function followPropertyReferenceUserGet21$Json(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceUserGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceUserGet21$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

followPropertyReferenceUserGet21$Json.PATH = '/users/{id}/addresses';
