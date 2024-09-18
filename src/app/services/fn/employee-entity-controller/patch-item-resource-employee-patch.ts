/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EmployeeRequestBody } from '../../models/employee-request-body';
import { EntityModelEmployee } from '../../models/entity-model-employee';

export interface PatchItemResourceEmployeePatch$Params {
  id: string;
      body: EmployeeRequestBody
}

export function patchItemResourceEmployeePatch(http: HttpClient, rootUrl: string, params: PatchItemResourceEmployeePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmployee>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceEmployeePatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelEmployee>;
    })
  );
}

patchItemResourceEmployeePatch.PATH = '/employees/{id}';
