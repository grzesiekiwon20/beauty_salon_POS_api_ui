/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelType } from '../../models/collection-model-entity-model-type';

export interface ExecuteSearchTypeGet$Params {
  category?: string;
}

export function executeSearchTypeGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchTypeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelType>> {
  const rb = new RequestBuilder(rootUrl, executeSearchTypeGet.PATH, 'get');
  if (params) {
    rb.query('category', params.category, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelType>;
    })
  );
}

executeSearchTypeGet.PATH = '/types/search/findByCategory';
