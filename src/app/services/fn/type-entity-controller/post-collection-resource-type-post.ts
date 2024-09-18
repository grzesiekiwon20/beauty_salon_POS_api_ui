/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelType } from '../../models/entity-model-type';
import { TypeRequestBody } from '../../models/type-request-body';

export interface PostCollectionResourceTypePost$Params {
      body: TypeRequestBody
}

export function postCollectionResourceTypePost(http: HttpClient, rootUrl: string, params: PostCollectionResourceTypePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelType>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceTypePost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelType>;
    })
  );
}

postCollectionResourceTypePost.PATH = '/types';
