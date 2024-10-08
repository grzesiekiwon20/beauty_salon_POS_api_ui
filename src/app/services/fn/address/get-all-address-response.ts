/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddressResponse } from '../../models/address-response';

export interface GetAllAddressResponse$Params {
}

export function getAllAddressResponse(http: HttpClient, rootUrl: string, params?: GetAllAddressResponse$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AddressResponse>>> {
  const rb = new RequestBuilder(rootUrl, getAllAddressResponse.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AddressResponse>>;
    })
  );
}

getAllAddressResponse.PATH = '/addresses/all';
