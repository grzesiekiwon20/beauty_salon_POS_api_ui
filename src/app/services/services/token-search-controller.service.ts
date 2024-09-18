/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelToken } from '../models/entity-model-token';
import { executeSearchTokenGet } from '../fn/token-search-controller/execute-search-token-get';
import { ExecuteSearchTokenGet$Params } from '../fn/token-search-controller/execute-search-token-get';

@Injectable({ providedIn: 'root' })
export class TokenSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchTokenGet()` */
  static readonly ExecuteSearchTokenGetPath = '/tokens/search/findByToken';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchTokenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTokenGet$Response(params?: ExecuteSearchTokenGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelToken>> {
    return executeSearchTokenGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchTokenGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTokenGet(params?: ExecuteSearchTokenGet$Params, context?: HttpContext): Observable<EntityModelToken> {
    return this.executeSearchTokenGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelToken>): EntityModelToken => r.body)
    );
  }

}
