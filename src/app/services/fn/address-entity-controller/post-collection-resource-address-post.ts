/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddressRequestBody } from '../../models/address-request-body';
import { EntityModelAddress } from '../../models/entity-model-address';

export interface PostCollectionResourceAddressPost$Params {
      body: AddressRequestBody
}

export function postCollectionResourceAddressPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceAddressPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceAddressPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelAddress>;
    })
  );
}

postCollectionResourceAddressPost.PATH = '/addresses';
