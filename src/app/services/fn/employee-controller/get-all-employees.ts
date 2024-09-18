/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmployeeResponse } from '../../models/employee-response';

export interface GetAllEmployees$Params {
}

export function getAllEmployees(http: HttpClient, rootUrl: string, params?: GetAllEmployees$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EmployeeResponse>>> {
  const rb = new RequestBuilder(rootUrl, getAllEmployees.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EmployeeResponse>>;
    })
  );
}

getAllEmployees.PATH = '/employees/all';
