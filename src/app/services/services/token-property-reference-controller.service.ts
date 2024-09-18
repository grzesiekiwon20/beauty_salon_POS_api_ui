/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceTokenPatch$Json } from '../fn/token-property-reference-controller/create-property-reference-token-patch-json';
import { CreatePropertyReferenceTokenPatch$Json$Params } from '../fn/token-property-reference-controller/create-property-reference-token-patch-json';
import { createPropertyReferenceTokenPatch$UriList } from '../fn/token-property-reference-controller/create-property-reference-token-patch-uri-list';
import { CreatePropertyReferenceTokenPatch$UriList$Params } from '../fn/token-property-reference-controller/create-property-reference-token-patch-uri-list';
import { createPropertyReferenceTokenPut$Json } from '../fn/token-property-reference-controller/create-property-reference-token-put-json';
import { CreatePropertyReferenceTokenPut$Json$Params } from '../fn/token-property-reference-controller/create-property-reference-token-put-json';
import { createPropertyReferenceTokenPut$UriList } from '../fn/token-property-reference-controller/create-property-reference-token-put-uri-list';
import { CreatePropertyReferenceTokenPut$UriList$Params } from '../fn/token-property-reference-controller/create-property-reference-token-put-uri-list';
import { deletePropertyReferenceIdTokenDelete } from '../fn/token-property-reference-controller/delete-property-reference-id-token-delete';
import { DeletePropertyReferenceIdTokenDelete$Params } from '../fn/token-property-reference-controller/delete-property-reference-id-token-delete';
import { deletePropertyReferenceTokenDelete } from '../fn/token-property-reference-controller/delete-property-reference-token-delete';
import { DeletePropertyReferenceTokenDelete$Params } from '../fn/token-property-reference-controller/delete-property-reference-token-delete';
import { EntityModelUser } from '../models/entity-model-user';
import { followPropertyReferenceTokenGet } from '../fn/token-property-reference-controller/follow-property-reference-token-get';
import { FollowPropertyReferenceTokenGet$Params } from '../fn/token-property-reference-controller/follow-property-reference-token-get';
import { followPropertyReferenceTokenGet1$Json } from '../fn/token-property-reference-controller/follow-property-reference-token-get-1-json';
import { FollowPropertyReferenceTokenGet1$Json$Params } from '../fn/token-property-reference-controller/follow-property-reference-token-get-1-json';
import { followPropertyReferenceTokenGet1$UriList } from '../fn/token-property-reference-controller/follow-property-reference-token-get-1-uri-list';
import { FollowPropertyReferenceTokenGet1$UriList$Params } from '../fn/token-property-reference-controller/follow-property-reference-token-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class TokenPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceTokenGet1()` */
  static readonly FollowPropertyReferenceTokenGet1Path = '/tokens/{id}/user';

  /**
   * get-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceTokenGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTokenGet1$Json$Response(params: FollowPropertyReferenceTokenGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceTokenGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceTokenGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTokenGet1$Json(params: FollowPropertyReferenceTokenGet1$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceTokenGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * get-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceTokenGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTokenGet1$UriList$Response(params: FollowPropertyReferenceTokenGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceTokenGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceTokenGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTokenGet1$UriList(params: FollowPropertyReferenceTokenGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceTokenGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceTokenPut()` */
  static readonly CreatePropertyReferenceTokenPutPath = '/tokens/{id}/user';

  /**
   * update-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceTokenPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceTokenPut$Json$Response(params: CreatePropertyReferenceTokenPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceTokenPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceTokenPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceTokenPut$Json(params: CreatePropertyReferenceTokenPut$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceTokenPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * update-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceTokenPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceTokenPut$UriList$Response(params: CreatePropertyReferenceTokenPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceTokenPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceTokenPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceTokenPut$UriList(params: CreatePropertyReferenceTokenPut$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceTokenPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceTokenDelete()` */
  static readonly DeletePropertyReferenceTokenDeletePath = '/tokens/{id}/user';

  /**
   * delete-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceTokenDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceTokenDelete$Response(params: DeletePropertyReferenceTokenDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceTokenDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceTokenDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceTokenDelete(params: DeletePropertyReferenceTokenDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceTokenDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceTokenPatch()` */
  static readonly CreatePropertyReferenceTokenPatchPath = '/tokens/{id}/user';

  /**
   * patch-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceTokenPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceTokenPatch$Json$Response(params: CreatePropertyReferenceTokenPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceTokenPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceTokenPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceTokenPatch$Json(params: CreatePropertyReferenceTokenPatch$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceTokenPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * patch-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceTokenPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceTokenPatch$UriList$Response(params: CreatePropertyReferenceTokenPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceTokenPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceTokenPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceTokenPatch$UriList(params: CreatePropertyReferenceTokenPatch$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceTokenPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceTokenGet()` */
  static readonly FollowPropertyReferenceTokenGetPath = '/tokens/{id}/user/{propertyId}';

  /**
   * get-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceTokenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTokenGet$Response(params: FollowPropertyReferenceTokenGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceTokenGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceTokenGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTokenGet(params: FollowPropertyReferenceTokenGet$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceTokenGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdTokenDelete()` */
  static readonly DeletePropertyReferenceIdTokenDeletePath = '/tokens/{id}/user/{propertyId}';

  /**
   * delete-user-by-token-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdTokenDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdTokenDelete$Response(params: DeletePropertyReferenceIdTokenDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdTokenDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-token-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdTokenDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdTokenDelete(params: DeletePropertyReferenceIdTokenDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdTokenDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
