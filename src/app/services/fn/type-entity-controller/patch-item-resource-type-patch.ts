/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelType } from '../../models/entity-model-type';
import { TypeRequestBody } from '../../models/type-request-body';

export interface PatchItemResourceTypePatch$Params {
  id: string;
      body: TypeRequestBody
}

export function patchItemResourceTypePatch(http: HttpClient, rootUrl: string, params: PatchItemResourceTypePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelType>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceTypePatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelType>;
    })
  );
}

patchItemResourceTypePatch.PATH = '/types/{id}';
