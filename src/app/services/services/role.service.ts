/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { assignRole } from '../fn/role/assign-role';
import { AssignRole$Params } from '../fn/role/assign-role';


/**
 * The Role Api
 */
@Injectable({ providedIn: 'root' })
export class RoleService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `assignRole()` */
  static readonly AssignRolePath = '/roles/{userId}&{roleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `assignRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignRole$Response(params: AssignRole$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return assignRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `assignRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  assignRole(params: AssignRole$Params, context?: HttpContext): Observable<void> {
    return this.assignRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
