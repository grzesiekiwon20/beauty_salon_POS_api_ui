/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceActivityDelete } from '../fn/activity-entity-controller/delete-item-resource-activity-delete';
import { DeleteItemResourceActivityDelete$Params } from '../fn/activity-entity-controller/delete-item-resource-activity-delete';
import { EntityModelActivity } from '../models/entity-model-activity';
import { getCollectionResourceActivityGet1$Json } from '../fn/activity-entity-controller/get-collection-resource-activity-get-1-json';
import { GetCollectionResourceActivityGet1$Json$Params } from '../fn/activity-entity-controller/get-collection-resource-activity-get-1-json';
import { getCollectionResourceActivityGet1$UriList } from '../fn/activity-entity-controller/get-collection-resource-activity-get-1-uri-list';
import { GetCollectionResourceActivityGet1$UriList$Params } from '../fn/activity-entity-controller/get-collection-resource-activity-get-1-uri-list';
import { getItemResourceActivityGet } from '../fn/activity-entity-controller/get-item-resource-activity-get';
import { GetItemResourceActivityGet$Params } from '../fn/activity-entity-controller/get-item-resource-activity-get';
import { PagedModelEntityModelActivity } from '../models/paged-model-entity-model-activity';
import { patchItemResourceActivityPatch } from '../fn/activity-entity-controller/patch-item-resource-activity-patch';
import { PatchItemResourceActivityPatch$Params } from '../fn/activity-entity-controller/patch-item-resource-activity-patch';
import { postCollectionResourceActivityPost } from '../fn/activity-entity-controller/post-collection-resource-activity-post';
import { PostCollectionResourceActivityPost$Params } from '../fn/activity-entity-controller/post-collection-resource-activity-post';
import { putItemResourceActivityPut } from '../fn/activity-entity-controller/put-item-resource-activity-put';
import { PutItemResourceActivityPut$Params } from '../fn/activity-entity-controller/put-item-resource-activity-put';

@Injectable({ providedIn: 'root' })
export class ActivityEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceActivityGet1()` */
  static readonly GetCollectionResourceActivityGet1Path = '/activities';

  /**
   * get-activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceActivityGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceActivityGet1$Json$Response(params?: GetCollectionResourceActivityGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelActivity>> {
    return getCollectionResourceActivityGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceActivityGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceActivityGet1$Json(params?: GetCollectionResourceActivityGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelActivity> {
    return this.getCollectionResourceActivityGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelActivity>): PagedModelEntityModelActivity => r.body)
    );
  }

  /**
   * get-activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceActivityGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceActivityGet1$UriList$Response(params?: GetCollectionResourceActivityGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceActivityGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceActivityGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceActivityGet1$UriList(params?: GetCollectionResourceActivityGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceActivityGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceActivityPost()` */
  static readonly PostCollectionResourceActivityPostPath = '/activities';

  /**
   * create-activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceActivityPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceActivityPost$Response(params: PostCollectionResourceActivityPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelActivity>> {
    return postCollectionResourceActivityPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-activity
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceActivityPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceActivityPost(params: PostCollectionResourceActivityPost$Params, context?: HttpContext): Observable<EntityModelActivity> {
    return this.postCollectionResourceActivityPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelActivity>): EntityModelActivity => r.body)
    );
  }

  /** Path part for operation `getItemResourceActivityGet()` */
  static readonly GetItemResourceActivityGetPath = '/activities/{id}';

  /**
   * get-activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceActivityGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceActivityGet$Response(params: GetItemResourceActivityGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelActivity>> {
    return getItemResourceActivityGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-activity
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceActivityGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceActivityGet(params: GetItemResourceActivityGet$Params, context?: HttpContext): Observable<EntityModelActivity> {
    return this.getItemResourceActivityGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelActivity>): EntityModelActivity => r.body)
    );
  }

  /** Path part for operation `putItemResourceActivityPut()` */
  static readonly PutItemResourceActivityPutPath = '/activities/{id}';

  /**
   * update-activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceActivityPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceActivityPut$Response(params: PutItemResourceActivityPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelActivity>> {
    return putItemResourceActivityPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-activity
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceActivityPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceActivityPut(params: PutItemResourceActivityPut$Params, context?: HttpContext): Observable<EntityModelActivity> {
    return this.putItemResourceActivityPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelActivity>): EntityModelActivity => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceActivityDelete()` */
  static readonly DeleteItemResourceActivityDeletePath = '/activities/{id}';

  /**
   * delete-activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceActivityDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceActivityDelete$Response(params: DeleteItemResourceActivityDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceActivityDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-activity
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceActivityDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceActivityDelete(params: DeleteItemResourceActivityDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceActivityDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceActivityPatch()` */
  static readonly PatchItemResourceActivityPatchPath = '/activities/{id}';

  /**
   * patch-activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceActivityPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceActivityPatch$Response(params: PatchItemResourceActivityPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelActivity>> {
    return patchItemResourceActivityPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-activity
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceActivityPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceActivityPatch(params: PatchItemResourceActivityPatch$Params, context?: HttpContext): Observable<EntityModelActivity> {
    return this.patchItemResourceActivityPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelActivity>): EntityModelActivity => r.body)
    );
  }

}
