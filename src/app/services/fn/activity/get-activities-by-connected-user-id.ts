/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityResponse } from '../../models/activity-response';

export interface GetActivitiesByConnectedUserId$Params {
}

export function getActivitiesByConnectedUserId(http: HttpClient, rootUrl: string, params?: GetActivitiesByConnectedUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityResponse>>> {
  const rb = new RequestBuilder(rootUrl, getActivitiesByConnectedUserId.PATH, 'get');
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

getActivitiesByConnectedUserId.PATH = '/activities/userId';
