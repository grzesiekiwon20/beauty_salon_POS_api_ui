/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ActivityRequestBody } from '../../models/activity-request-body';
import { EntityModelActivity } from '../../models/entity-model-activity';

export interface PatchItemResourceActivityPatch$Params {
  id: string;
      body: ActivityRequestBody
}

export function patchItemResourceActivityPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceActivityPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelActivity>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceActivityPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelActivity>;
    })
  );
}

patchItemResourceActivityPatch.PATH = '/activities/{id}';
