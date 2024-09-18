/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelUser } from '../../models/collection-model-entity-model-user';

export interface GetCollectionResourceUserGet1$Json$Params {
}

export function getCollectionResourceUserGet1$Json(http: HttpClient, rootUrl: string, params?: GetCollectionResourceUserGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelUser>> {
  const rb = new RequestBuilder(rootUrl, getCollectionResourceUserGet1$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/x-spring-data-compact+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelUser>;
    })
  );
}

getCollectionResourceUserGet1$Json.PATH = '/users';
