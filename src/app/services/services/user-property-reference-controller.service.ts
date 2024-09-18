/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelActivity } from '../models/collection-model-activity';
import { CollectionModelAddress } from '../models/collection-model-address';
import { CollectionModelRole } from '../models/collection-model-role';
import { createPropertyReferenceUserPatch$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-json';
import { CreatePropertyReferenceUserPatch$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-json';
import { createPropertyReferenceUserPatch$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-uri-list';
import { CreatePropertyReferenceUserPatch$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-uri-list';
import { createPropertyReferenceUserPatch1$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-json';
import { CreatePropertyReferenceUserPatch1$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-json';
import { createPropertyReferenceUserPatch1$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-uri-list';
import { CreatePropertyReferenceUserPatch1$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-uri-list';
import { createPropertyReferenceUserPatch2$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-2-json';
import { CreatePropertyReferenceUserPatch2$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-2-json';
import { createPropertyReferenceUserPatch2$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-2-uri-list';
import { CreatePropertyReferenceUserPatch2$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-2-uri-list';
import { createPropertyReferenceUserPut$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-json';
import { CreatePropertyReferenceUserPut$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-json';
import { createPropertyReferenceUserPut$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-uri-list';
import { CreatePropertyReferenceUserPut$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-uri-list';
import { createPropertyReferenceUserPut1$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-json';
import { CreatePropertyReferenceUserPut1$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-json';
import { createPropertyReferenceUserPut1$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-uri-list';
import { CreatePropertyReferenceUserPut1$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-uri-list';
import { createPropertyReferenceUserPut2$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-2-json';
import { CreatePropertyReferenceUserPut2$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-2-json';
import { createPropertyReferenceUserPut2$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-2-uri-list';
import { CreatePropertyReferenceUserPut2$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-2-uri-list';
import { deletePropertyReferenceIdUserDelete } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete';
import { DeletePropertyReferenceIdUserDelete$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete';
import { deletePropertyReferenceIdUserDelete1 } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-1';
import { DeletePropertyReferenceIdUserDelete1$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-1';
import { deletePropertyReferenceIdUserDelete2 } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-2';
import { DeletePropertyReferenceIdUserDelete2$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-2';
import { deletePropertyReferenceUserDelete } from '../fn/user-property-reference-controller/delete-property-reference-user-delete';
import { DeletePropertyReferenceUserDelete$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete';
import { deletePropertyReferenceUserDelete1 } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-1';
import { DeletePropertyReferenceUserDelete1$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-1';
import { deletePropertyReferenceUserDelete2 } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-2';
import { DeletePropertyReferenceUserDelete2$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-2';
import { followPropertyReferenceUserGet } from '../fn/user-property-reference-controller/follow-property-reference-user-get';
import { FollowPropertyReferenceUserGet$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get';
import { followPropertyReferenceUserGet1$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-json';
import { FollowPropertyReferenceUserGet1$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-json';
import { followPropertyReferenceUserGet1$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-uri-list';
import { FollowPropertyReferenceUserGet1$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-uri-list';
import { followPropertyReferenceUserGet2 } from '../fn/user-property-reference-controller/follow-property-reference-user-get-2';
import { FollowPropertyReferenceUserGet2$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-2';
import { followPropertyReferenceUserGet21$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-json';
import { FollowPropertyReferenceUserGet21$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-json';
import { followPropertyReferenceUserGet21$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-uri-list';
import { FollowPropertyReferenceUserGet21$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-uri-list';
import { followPropertyReferenceUserGet3 } from '../fn/user-property-reference-controller/follow-property-reference-user-get-3';
import { FollowPropertyReferenceUserGet3$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-3';
import { followPropertyReferenceUserGet31$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-31-json';
import { FollowPropertyReferenceUserGet31$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-31-json';
import { followPropertyReferenceUserGet31$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-31-uri-list';
import { FollowPropertyReferenceUserGet31$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-31-uri-list';

@Injectable({ providedIn: 'root' })
export class UserPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceUserGet1()` */
  static readonly FollowPropertyReferenceUserGet1Path = '/users/{id}/activities';

  /**
   * get-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$Json$Response(params: FollowPropertyReferenceUserGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return followPropertyReferenceUserGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$Json(params: FollowPropertyReferenceUserGet1$Json$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.followPropertyReferenceUserGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /**
   * get-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$UriList$Response(params: FollowPropertyReferenceUserGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$UriList(params: FollowPropertyReferenceUserGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut()` */
  static readonly CreatePropertyReferenceUserPutPath = '/users/{id}/activities';

  /**
   * update-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut$Json$Response(params: CreatePropertyReferenceUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return createPropertyReferenceUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut$Json(params: CreatePropertyReferenceUserPut$Json$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.createPropertyReferenceUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /**
   * update-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut$UriList$Response(params: CreatePropertyReferenceUserPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return createPropertyReferenceUserPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut$UriList(params: CreatePropertyReferenceUserPut$UriList$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.createPropertyReferenceUserPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete()` */
  static readonly DeletePropertyReferenceUserDeletePath = '/users/{id}/activities';

  /**
   * delete-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete$Response(params: DeletePropertyReferenceUserDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete(params: DeletePropertyReferenceUserDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch()` */
  static readonly CreatePropertyReferenceUserPatchPath = '/users/{id}/activities';

  /**
   * patch-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch$Json$Response(params: CreatePropertyReferenceUserPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return createPropertyReferenceUserPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch$Json(params: CreatePropertyReferenceUserPatch$Json$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.createPropertyReferenceUserPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /**
   * patch-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch$UriList$Response(params: CreatePropertyReferenceUserPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return createPropertyReferenceUserPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch$UriList(params: CreatePropertyReferenceUserPatch$UriList$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.createPropertyReferenceUserPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet()` */
  static readonly FollowPropertyReferenceUserGetPath = '/users/{id}/activities/{propertyId}';

  /**
   * get-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet$Response(params: FollowPropertyReferenceUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return followPropertyReferenceUserGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet(params: FollowPropertyReferenceUserGet$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.followPropertyReferenceUserGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete()` */
  static readonly DeletePropertyReferenceIdUserDeletePath = '/users/{id}/activities/{propertyId}';

  /**
   * delete-activity-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete$Response(params: DeletePropertyReferenceIdUserDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-activity-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete(params: DeletePropertyReferenceIdUserDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet21()` */
  static readonly FollowPropertyReferenceUserGet21Path = '/users/{id}/addresses';

  /**
   * get-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$Json$Response(params: FollowPropertyReferenceUserGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
    return followPropertyReferenceUserGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$Json(params: FollowPropertyReferenceUserGet21$Json$Params, context?: HttpContext): Observable<CollectionModelAddress> {
    return this.followPropertyReferenceUserGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelAddress>): CollectionModelAddress => r.body)
    );
  }

  /**
   * get-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$UriList$Response(params: FollowPropertyReferenceUserGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$UriList(params: FollowPropertyReferenceUserGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut1()` */
  static readonly CreatePropertyReferenceUserPut1Path = '/users/{id}/addresses';

  /**
   * update-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut1$Json$Response(params: CreatePropertyReferenceUserPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
    return createPropertyReferenceUserPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut1$Json(params: CreatePropertyReferenceUserPut1$Json$Params, context?: HttpContext): Observable<CollectionModelAddress> {
    return this.createPropertyReferenceUserPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelAddress>): CollectionModelAddress => r.body)
    );
  }

  /**
   * update-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut1$UriList$Response(params: CreatePropertyReferenceUserPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
    return createPropertyReferenceUserPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut1$UriList(params: CreatePropertyReferenceUserPut1$UriList$Params, context?: HttpContext): Observable<CollectionModelAddress> {
    return this.createPropertyReferenceUserPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelAddress>): CollectionModelAddress => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete1()` */
  static readonly DeletePropertyReferenceUserDelete1Path = '/users/{id}/addresses';

  /**
   * delete-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete1$Response(params: DeletePropertyReferenceUserDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete1(params: DeletePropertyReferenceUserDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch1()` */
  static readonly CreatePropertyReferenceUserPatch1Path = '/users/{id}/addresses';

  /**
   * patch-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch1$Json$Response(params: CreatePropertyReferenceUserPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
    return createPropertyReferenceUserPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch1$Json(params: CreatePropertyReferenceUserPatch1$Json$Params, context?: HttpContext): Observable<CollectionModelAddress> {
    return this.createPropertyReferenceUserPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelAddress>): CollectionModelAddress => r.body)
    );
  }

  /**
   * patch-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch1$UriList$Response(params: CreatePropertyReferenceUserPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
    return createPropertyReferenceUserPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch1$UriList(params: CreatePropertyReferenceUserPatch1$UriList$Params, context?: HttpContext): Observable<CollectionModelAddress> {
    return this.createPropertyReferenceUserPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelAddress>): CollectionModelAddress => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet2()` */
  static readonly FollowPropertyReferenceUserGet2Path = '/users/{id}/addresses/{propertyId}';

  /**
   * get-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet2$Response(params: FollowPropertyReferenceUserGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelAddress>> {
    return followPropertyReferenceUserGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet2(params: FollowPropertyReferenceUserGet2$Params, context?: HttpContext): Observable<CollectionModelAddress> {
    return this.followPropertyReferenceUserGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelAddress>): CollectionModelAddress => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete1()` */
  static readonly DeletePropertyReferenceIdUserDelete1Path = '/users/{id}/addresses/{propertyId}';

  /**
   * delete-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete1$Response(params: DeletePropertyReferenceIdUserDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete1(params: DeletePropertyReferenceIdUserDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet31()` */
  static readonly FollowPropertyReferenceUserGet31Path = '/users/{id}/roleList';

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet31$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet31$Json$Response(params: FollowPropertyReferenceUserGet31$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return followPropertyReferenceUserGet31$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet31$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet31$Json(params: FollowPropertyReferenceUserGet31$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.followPropertyReferenceUserGet31$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet31$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet31$UriList$Response(params: FollowPropertyReferenceUserGet31$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet31$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet31$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet31$UriList(params: FollowPropertyReferenceUserGet31$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet31$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut2()` */
  static readonly CreatePropertyReferenceUserPut2Path = '/users/{id}/roleList';

  /**
   * update-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut2$Json$Response(params: CreatePropertyReferenceUserPut2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUserPut2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut2$Json(params: CreatePropertyReferenceUserPut2$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUserPut2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut2$UriList$Response(params: CreatePropertyReferenceUserPut2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUserPut2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut2$UriList(params: CreatePropertyReferenceUserPut2$UriList$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUserPut2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete2()` */
  static readonly DeletePropertyReferenceUserDelete2Path = '/users/{id}/roleList';

  /**
   * delete-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete2$Response(params: DeletePropertyReferenceUserDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete2(params: DeletePropertyReferenceUserDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch2()` */
  static readonly CreatePropertyReferenceUserPatch2Path = '/users/{id}/roleList';

  /**
   * patch-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch2$Json$Response(params: CreatePropertyReferenceUserPatch2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUserPatch2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch2$Json(params: CreatePropertyReferenceUserPatch2$Json$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUserPatch2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch2$UriList$Response(params: CreatePropertyReferenceUserPatch2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return createPropertyReferenceUserPatch2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch2$UriList(params: CreatePropertyReferenceUserPatch2$UriList$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.createPropertyReferenceUserPatch2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet3()` */
  static readonly FollowPropertyReferenceUserGet3Path = '/users/{id}/roleList/{propertyId}';

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet3$Response(params: FollowPropertyReferenceUserGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelRole>> {
    return followPropertyReferenceUserGet3(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet3(params: FollowPropertyReferenceUserGet3$Params, context?: HttpContext): Observable<CollectionModelRole> {
    return this.followPropertyReferenceUserGet3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelRole>): CollectionModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete2()` */
  static readonly DeletePropertyReferenceIdUserDelete2Path = '/users/{id}/roleList/{propertyId}';

  /**
   * delete-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete2$Response(params: DeletePropertyReferenceIdUserDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete2(params: DeletePropertyReferenceIdUserDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
