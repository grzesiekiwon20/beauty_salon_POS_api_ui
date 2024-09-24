/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityRequest } from '../../models/activity-request';

export interface SaveActivityByEmployee$Params {
  typeId: number;
  userId: number;
      body: ActivityRequest
}

export function saveActivityByEmployee(http: HttpClient, rootUrl: string, params: SaveActivityByEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, saveActivityByEmployee.PATH, 'post');
  if (params) {
    rb.path('typeId', params.typeId, {});
    rb.path('userId', params.userId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
    })
  );
}

saveActivityByEmployee.PATH = '/activities/create/emp/{typeId}/{userId}';
