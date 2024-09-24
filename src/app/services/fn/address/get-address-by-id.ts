/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddressResponse } from '../../models/address-response';

export interface GetAddressById$Params {
  addressId: number;
}

export function getAddressById(http: HttpClient, rootUrl: string, params: GetAddressById$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressResponse>> {
  const rb = new RequestBuilder(rootUrl, getAddressById.PATH, 'get');
  if (params) {
    rb.path('addressId', params.addressId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AddressResponse>;
    })
  );
}

getAddressById.PATH = '/addresses/addressId/{addressId}';
