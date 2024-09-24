/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TypeResponse } from '../../models/type-response';

export interface GetTypesByCategory$Params {
  category: string;
}

export function getTypesByCategory(http: HttpClient, rootUrl: string, params: GetTypesByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TypeResponse>>> {
  const rb = new RequestBuilder(rootUrl, getTypesByCategory.PATH, 'get');
  if (params) {
    rb.query('category', params.category, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TypeResponse>>;
    })
  );
}

getTypesByCategory.PATH = '/types/category';
