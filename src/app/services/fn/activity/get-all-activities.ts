/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityResponse } from '../../models/activity-response';

export interface GetAllActivities$Params {
}

export function getAllActivities(http: HttpClient, rootUrl: string, params?: GetAllActivities$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityResponse>>> {
  const rb = new RequestBuilder(rootUrl, getAllActivities.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ActivityResponse>>;
    })
  );
}

getAllActivities.PATH = '/activities/all';
