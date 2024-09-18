/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelType } from '../models/collection-model-entity-model-type';
import { executeSearchTypeGet } from '../fn/type-search-controller/execute-search-type-get';
import { ExecuteSearchTypeGet$Params } from '../fn/type-search-controller/execute-search-type-get';

@Injectable({ providedIn: 'root' })
export class TypeSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchTypeGet()` */
  static readonly ExecuteSearchTypeGetPath = '/types/search/findByCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTypeGet$Response(params?: ExecuteSearchTypeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelType>> {
    return executeSearchTypeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTypeGet(params?: ExecuteSearchTypeGet$Params, context?: HttpContext): Observable<CollectionModelEntityModelType> {
    return this.executeSearchTypeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelType>): CollectionModelEntityModelType => r.body)
    );
  }

}
