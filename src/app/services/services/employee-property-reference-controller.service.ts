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
import { createPropertyReferenceEmployeePatch$Json } from '../fn/employee-property-reference-controller/create-property-reference-employee-patch-json';
import { CreatePropertyReferenceEmployeePatch$Json$Params } from '../fn/employee-property-reference-controller/create-property-reference-employee-patch-json';
import { createPropertyReferenceEmployeePatch$UriList } from '../fn/employee-property-reference-controller/create-property-reference-employee-patch-uri-list';
import { CreatePropertyReferenceEmployeePatch$UriList$Params } from '../fn/employee-property-reference-controller/create-property-reference-employee-patch-uri-list';
import { createPropertyReferenceEmployeePut$Json } from '../fn/employee-property-reference-controller/create-property-reference-employee-put-json';
import { CreatePropertyReferenceEmployeePut$Json$Params } from '../fn/employee-property-reference-controller/create-property-reference-employee-put-json';
import { createPropertyReferenceEmployeePut$UriList } from '../fn/employee-property-reference-controller/create-property-reference-employee-put-uri-list';
import { CreatePropertyReferenceEmployeePut$UriList$Params } from '../fn/employee-property-reference-controller/create-property-reference-employee-put-uri-list';
import { deletePropertyReferenceEmployeeDelete } from '../fn/employee-property-reference-controller/delete-property-reference-employee-delete';
import { DeletePropertyReferenceEmployeeDelete$Params } from '../fn/employee-property-reference-controller/delete-property-reference-employee-delete';
import { deletePropertyReferenceIdEmployeeDelete } from '../fn/employee-property-reference-controller/delete-property-reference-id-employee-delete';
import { DeletePropertyReferenceIdEmployeeDelete$Params } from '../fn/employee-property-reference-controller/delete-property-reference-id-employee-delete';
import { followPropertyReferenceEmployeeGet } from '../fn/employee-property-reference-controller/follow-property-reference-employee-get';
import { FollowPropertyReferenceEmployeeGet$Params } from '../fn/employee-property-reference-controller/follow-property-reference-employee-get';
import { followPropertyReferenceEmployeeGet1$Json } from '../fn/employee-property-reference-controller/follow-property-reference-employee-get-1-json';
import { FollowPropertyReferenceEmployeeGet1$Json$Params } from '../fn/employee-property-reference-controller/follow-property-reference-employee-get-1-json';
import { followPropertyReferenceEmployeeGet1$UriList } from '../fn/employee-property-reference-controller/follow-property-reference-employee-get-1-uri-list';
import { FollowPropertyReferenceEmployeeGet1$UriList$Params } from '../fn/employee-property-reference-controller/follow-property-reference-employee-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class EmployeePropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceEmployeeGet1()` */
  static readonly FollowPropertyReferenceEmployeeGet1Path = '/employees/{id}/activities';

  /**
   * get-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceEmployeeGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceEmployeeGet1$Json$Response(params: FollowPropertyReferenceEmployeeGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return followPropertyReferenceEmployeeGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceEmployeeGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceEmployeeGet1$Json(params: FollowPropertyReferenceEmployeeGet1$Json$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.followPropertyReferenceEmployeeGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /**
   * get-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceEmployeeGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceEmployeeGet1$UriList$Response(params: FollowPropertyReferenceEmployeeGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceEmployeeGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceEmployeeGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceEmployeeGet1$UriList(params: FollowPropertyReferenceEmployeeGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceEmployeeGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceEmployeePut()` */
  static readonly CreatePropertyReferenceEmployeePutPath = '/employees/{id}/activities';

  /**
   * update-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceEmployeePut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceEmployeePut$Json$Response(params: CreatePropertyReferenceEmployeePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return createPropertyReferenceEmployeePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceEmployeePut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceEmployeePut$Json(params: CreatePropertyReferenceEmployeePut$Json$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.createPropertyReferenceEmployeePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /**
   * update-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceEmployeePut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceEmployeePut$UriList$Response(params: CreatePropertyReferenceEmployeePut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return createPropertyReferenceEmployeePut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceEmployeePut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceEmployeePut$UriList(params: CreatePropertyReferenceEmployeePut$UriList$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.createPropertyReferenceEmployeePut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceEmployeeDelete()` */
  static readonly DeletePropertyReferenceEmployeeDeletePath = '/employees/{id}/activities';

  /**
   * delete-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceEmployeeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceEmployeeDelete$Response(params: DeletePropertyReferenceEmployeeDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceEmployeeDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceEmployeeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceEmployeeDelete(params: DeletePropertyReferenceEmployeeDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceEmployeeDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceEmployeePatch()` */
  static readonly CreatePropertyReferenceEmployeePatchPath = '/employees/{id}/activities';

  /**
   * patch-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceEmployeePatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceEmployeePatch$Json$Response(params: CreatePropertyReferenceEmployeePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return createPropertyReferenceEmployeePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceEmployeePatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceEmployeePatch$Json(params: CreatePropertyReferenceEmployeePatch$Json$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.createPropertyReferenceEmployeePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /**
   * patch-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceEmployeePatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceEmployeePatch$UriList$Response(params: CreatePropertyReferenceEmployeePatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return createPropertyReferenceEmployeePatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceEmployeePatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceEmployeePatch$UriList(params: CreatePropertyReferenceEmployeePatch$UriList$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.createPropertyReferenceEmployeePatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceEmployeeGet()` */
  static readonly FollowPropertyReferenceEmployeeGetPath = '/employees/{id}/activities/{propertyId}';

  /**
   * get-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceEmployeeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceEmployeeGet$Response(params: FollowPropertyReferenceEmployeeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelActivity>> {
    return followPropertyReferenceEmployeeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceEmployeeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceEmployeeGet(params: FollowPropertyReferenceEmployeeGet$Params, context?: HttpContext): Observable<CollectionModelActivity> {
    return this.followPropertyReferenceEmployeeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelActivity>): CollectionModelActivity => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdEmployeeDelete()` */
  static readonly DeletePropertyReferenceIdEmployeeDeletePath = '/employees/{id}/activities/{propertyId}';

  /**
   * delete-activity-by-employee-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdEmployeeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdEmployeeDelete$Response(params: DeletePropertyReferenceIdEmployeeDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdEmployeeDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-activity-by-employee-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdEmployeeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdEmployeeDelete(params: DeletePropertyReferenceIdEmployeeDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdEmployeeDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
