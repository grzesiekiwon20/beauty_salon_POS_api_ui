/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAddressIdsListFromConnectedUser } from '../fn/user-controller/get-address-ids-list-from-connected-user';
import { GetAddressIdsListFromConnectedUser$Params } from '../fn/user-controller/get-address-ids-list-from-connected-user';
import { getAllUsers } from '../fn/user-controller/get-all-users';
import { GetAllUsers$Params } from '../fn/user-controller/get-all-users';
import { getDetailsOfConnectedUser } from '../fn/user-controller/get-details-of-connected-user';
import { GetDetailsOfConnectedUser$Params } from '../fn/user-controller/get-details-of-connected-user';
import { UserResponse } from '../models/user-response';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllUsers()` */
  static readonly GetAllUsersPath = '/users/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponse>>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<Array<UserResponse>> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserResponse>>): Array<UserResponse> => r.body)
    );
  }

  /** Path part for operation `getAddressIdsListFromConnectedUser()` */
  static readonly GetAddressIdsListFromConnectedUserPath = '/users/address-list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAddressIdsListFromConnectedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressIdsListFromConnectedUser$Response(params?: GetAddressIdsListFromConnectedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<number>>> {
    return getAddressIdsListFromConnectedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAddressIdsListFromConnectedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressIdsListFromConnectedUser(params?: GetAddressIdsListFromConnectedUser$Params, context?: HttpContext): Observable<Array<number>> {
    return this.getAddressIdsListFromConnectedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<number>>): Array<number> => r.body)
    );
  }

  /** Path part for operation `getDetailsOfConnectedUser()` */
  static readonly GetDetailsOfConnectedUserPath = '/users/account-details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDetailsOfConnectedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDetailsOfConnectedUser$Response(params?: GetDetailsOfConnectedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return getDetailsOfConnectedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDetailsOfConnectedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDetailsOfConnectedUser(params?: GetDetailsOfConnectedUser$Params, context?: HttpContext): Observable<UserResponse> {
    return this.getDetailsOfConnectedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

}
