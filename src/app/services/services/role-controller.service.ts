/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { allRoles } from '../fn/role-controller/all-roles';
import { AllRoles$Params } from '../fn/role-controller/all-roles';
import { assignRole } from '../fn/role-controller/assign-role';
import { AssignRole$Params } from '../fn/role-controller/assign-role';
import { createRole } from '../fn/role-controller/create-role';
import { CreateRole$Params } from '../fn/role-controller/create-role';
import { Role } from '../models/role';

@Injectable({ providedIn: 'root' })
export class RoleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createRole()` */
  static readonly CreateRolePath = '/roles/createRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRole$Response(params: CreateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRole(params: CreateRole$Params, context?: HttpContext): Observable<number> {
    return this.createRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
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

  /** Path part for operation `allRoles()` */
  static readonly AllRolesPath = '/roles/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `allRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  allRoles$Response(params?: AllRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Role>>> {
    return allRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `allRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  allRoles(params?: AllRoles$Params, context?: HttpContext): Observable<Array<Role>> {
    return this.allRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Role>>): Array<Role> => r.body)
    );
  }

}
