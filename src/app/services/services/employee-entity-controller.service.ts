/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceEmployeeDelete } from '../fn/employee-entity-controller/delete-item-resource-employee-delete';
import { DeleteItemResourceEmployeeDelete$Params } from '../fn/employee-entity-controller/delete-item-resource-employee-delete';
import { EntityModelEmployee } from '../models/entity-model-employee';
import { getCollectionResourceEmployeeGet1$Json } from '../fn/employee-entity-controller/get-collection-resource-employee-get-1-json';
import { GetCollectionResourceEmployeeGet1$Json$Params } from '../fn/employee-entity-controller/get-collection-resource-employee-get-1-json';
import { getCollectionResourceEmployeeGet1$UriList } from '../fn/employee-entity-controller/get-collection-resource-employee-get-1-uri-list';
import { GetCollectionResourceEmployeeGet1$UriList$Params } from '../fn/employee-entity-controller/get-collection-resource-employee-get-1-uri-list';
import { getItemResourceEmployeeGet } from '../fn/employee-entity-controller/get-item-resource-employee-get';
import { GetItemResourceEmployeeGet$Params } from '../fn/employee-entity-controller/get-item-resource-employee-get';
import { PagedModelEntityModelEmployee } from '../models/paged-model-entity-model-employee';
import { patchItemResourceEmployeePatch } from '../fn/employee-entity-controller/patch-item-resource-employee-patch';
import { PatchItemResourceEmployeePatch$Params } from '../fn/employee-entity-controller/patch-item-resource-employee-patch';
import { postCollectionResourceEmployeePost } from '../fn/employee-entity-controller/post-collection-resource-employee-post';
import { PostCollectionResourceEmployeePost$Params } from '../fn/employee-entity-controller/post-collection-resource-employee-post';
import { putItemResourceEmployeePut } from '../fn/employee-entity-controller/put-item-resource-employee-put';
import { PutItemResourceEmployeePut$Params } from '../fn/employee-entity-controller/put-item-resource-employee-put';

@Injectable({ providedIn: 'root' })
export class EmployeeEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceEmployeeGet1()` */
  static readonly GetCollectionResourceEmployeeGet1Path = '/employees';

  /**
   * get-employee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceEmployeeGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceEmployeeGet1$Json$Response(params?: GetCollectionResourceEmployeeGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelEmployee>> {
    return getCollectionResourceEmployeeGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-employee
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceEmployeeGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceEmployeeGet1$Json(params?: GetCollectionResourceEmployeeGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelEmployee> {
    return this.getCollectionResourceEmployeeGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelEmployee>): PagedModelEntityModelEmployee => r.body)
    );
  }

  /**
   * get-employee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceEmployeeGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceEmployeeGet1$UriList$Response(params?: GetCollectionResourceEmployeeGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceEmployeeGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-employee
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceEmployeeGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceEmployeeGet1$UriList(params?: GetCollectionResourceEmployeeGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceEmployeeGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceEmployeePost()` */
  static readonly PostCollectionResourceEmployeePostPath = '/employees';

  /**
   * create-employee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceEmployeePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceEmployeePost$Response(params: PostCollectionResourceEmployeePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmployee>> {
    return postCollectionResourceEmployeePost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-employee
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceEmployeePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceEmployeePost(params: PostCollectionResourceEmployeePost$Params, context?: HttpContext): Observable<EntityModelEmployee> {
    return this.postCollectionResourceEmployeePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmployee>): EntityModelEmployee => r.body)
    );
  }

  /** Path part for operation `getItemResourceEmployeeGet()` */
  static readonly GetItemResourceEmployeeGetPath = '/employees/{id}';

  /**
   * get-employee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceEmployeeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceEmployeeGet$Response(params: GetItemResourceEmployeeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmployee>> {
    return getItemResourceEmployeeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-employee
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceEmployeeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceEmployeeGet(params: GetItemResourceEmployeeGet$Params, context?: HttpContext): Observable<EntityModelEmployee> {
    return this.getItemResourceEmployeeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmployee>): EntityModelEmployee => r.body)
    );
  }

  /** Path part for operation `putItemResourceEmployeePut()` */
  static readonly PutItemResourceEmployeePutPath = '/employees/{id}';

  /**
   * update-employee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceEmployeePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceEmployeePut$Response(params: PutItemResourceEmployeePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmployee>> {
    return putItemResourceEmployeePut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-employee
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceEmployeePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceEmployeePut(params: PutItemResourceEmployeePut$Params, context?: HttpContext): Observable<EntityModelEmployee> {
    return this.putItemResourceEmployeePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmployee>): EntityModelEmployee => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceEmployeeDelete()` */
  static readonly DeleteItemResourceEmployeeDeletePath = '/employees/{id}';

  /**
   * delete-employee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceEmployeeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceEmployeeDelete$Response(params: DeleteItemResourceEmployeeDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceEmployeeDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-employee
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceEmployeeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceEmployeeDelete(params: DeleteItemResourceEmployeeDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceEmployeeDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceEmployeePatch()` */
  static readonly PatchItemResourceEmployeePatchPath = '/employees/{id}';

  /**
   * patch-employee
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceEmployeePatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceEmployeePatch$Response(params: PatchItemResourceEmployeePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmployee>> {
    return patchItemResourceEmployeePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-employee
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceEmployeePatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceEmployeePatch(params: PatchItemResourceEmployeePatch$Params, context?: HttpContext): Observable<EntityModelEmployee> {
    return this.patchItemResourceEmployeePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmployee>): EntityModelEmployee => r.body)
    );
  }

}
