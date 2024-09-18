/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetAddressIdsListFromConnectedUser$Params {
}

export function getAddressIdsListFromConnectedUser(http: HttpClient, rootUrl: string, params?: GetAddressIdsListFromConnectedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<number>>> {
  const rb = new RequestBuilder(rootUrl, getAddressIdsListFromConnectedUser.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<number>>;
    })
  );
}

getAddressIdsListFromConnectedUser.PATH = '/users/address-list';
