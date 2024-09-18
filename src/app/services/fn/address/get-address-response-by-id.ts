/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddressResponse } from '../../models/address-response';

export interface GetAddressResponseById$Params {
  addressId: number;
}

export function getAddressResponseById(http: HttpClient, rootUrl: string, params: GetAddressResponseById$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressResponse>> {
  const rb = new RequestBuilder(rootUrl, getAddressResponseById.PATH, 'get');
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

getAddressResponseById.PATH = '/address/{addressId}';
