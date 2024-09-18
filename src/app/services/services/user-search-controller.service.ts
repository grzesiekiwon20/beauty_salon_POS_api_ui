/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelUser } from '../models/entity-model-user';
import { executeSearchUserGet } from '../fn/user-search-controller/execute-search-user-get';
import { ExecuteSearchUserGet$Params } from '../fn/user-search-controller/execute-search-user-get';
import { executeSearchUserGet1 } from '../fn/user-search-controller/execute-search-user-get-1';
import { ExecuteSearchUserGet1$Params } from '../fn/user-search-controller/execute-search-user-get-1';
import { executeSearchUserGet2 } from '../fn/user-search-controller/execute-search-user-get-2';
import { ExecuteSearchUserGet2$Params } from '../fn/user-search-controller/execute-search-user-get-2';

@Injectable({ providedIn: 'root' })
export class UserSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchUserGet()` */
  static readonly ExecuteSearchUserGetPath = '/users/search/existsByEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet$Response(params?: ExecuteSearchUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return executeSearchUserGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet(params?: ExecuteSearchUserGet$Params, context?: HttpContext): Observable<boolean> {
    return this.executeSearchUserGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `executeSearchUserGet1()` */
  static readonly ExecuteSearchUserGet1Path = '/users/search/findByEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchUserGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet1$Response(params?: ExecuteSearchUserGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return executeSearchUserGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchUserGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet1(params?: ExecuteSearchUserGet1$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.executeSearchUserGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `executeSearchUserGet2()` */
  static readonly ExecuteSearchUserGet2Path = '/users/search/findByFullName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchUserGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet2$Response(params?: ExecuteSearchUserGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return executeSearchUserGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchUserGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchUserGet2(params?: ExecuteSearchUserGet2$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.executeSearchUserGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

}
