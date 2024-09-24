/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAddressIdsListFromConnectedUser } from '../fn/user/get-address-ids-list-from-connected-user';
import { GetAddressIdsListFromConnectedUser$Params } from '../fn/user/get-address-ids-list-from-connected-user';
import { getAllUsers } from '../fn/user/get-all-users';
import { GetAllUsers$Params } from '../fn/user/get-all-users';
import { getDetailsOfConnectedUser } from '../fn/user/get-details-of-connected-user';
import { GetDetailsOfConnectedUser$Params } from '../fn/user/get-details-of-connected-user';
import { UserResponse } from '../models/user-response';
import { usersUserIdGet } from '../fn/user/users-user-id-get';
import { UsersUserIdGet$Params } from '../fn/user/users-user-id-get';


/**
 * The User Api
 */
@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
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

  /** Path part for operation `usersUserIdGet()` */
  static readonly UsersUserIdGetPath = '/users/user/{id}';

  /**
   * Retrieve a User by Id.
   *
   * Get a User object by specifying its id. The response is User object with id, details.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersUserIdGet$Response(params: UsersUserIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return usersUserIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve a User by Id.
   *
   * Get a User object by specifying its id. The response is User object with id, details.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersUserIdGet(params: UsersUserIdGet$Params, context?: HttpContext): Observable<UserResponse> {
    return this.usersUserIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
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
