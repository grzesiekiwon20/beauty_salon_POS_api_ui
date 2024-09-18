/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelUser } from '../models/collection-model-entity-model-user';
import { deleteItemResourceUserDelete } from '../fn/user-entity-controller/delete-item-resource-user-delete';
import { DeleteItemResourceUserDelete$Params } from '../fn/user-entity-controller/delete-item-resource-user-delete';
import { EntityModelUser } from '../models/entity-model-user';
import { getCollectionResourceUserGet1$Json } from '../fn/user-entity-controller/get-collection-resource-user-get-1-json';
import { GetCollectionResourceUserGet1$Json$Params } from '../fn/user-entity-controller/get-collection-resource-user-get-1-json';
import { getCollectionResourceUserGet1$UriList } from '../fn/user-entity-controller/get-collection-resource-user-get-1-uri-list';
import { GetCollectionResourceUserGet1$UriList$Params } from '../fn/user-entity-controller/get-collection-resource-user-get-1-uri-list';
import { getItemResourceUserGet1 } from '../fn/user-entity-controller/get-item-resource-user-get-1';
import { GetItemResourceUserGet1$Params } from '../fn/user-entity-controller/get-item-resource-user-get-1';
import { patchItemResourceUserPatch } from '../fn/user-entity-controller/patch-item-resource-user-patch';
import { PatchItemResourceUserPatch$Params } from '../fn/user-entity-controller/patch-item-resource-user-patch';
import { postCollectionResourceUserPost } from '../fn/user-entity-controller/post-collection-resource-user-post';
import { PostCollectionResourceUserPost$Params } from '../fn/user-entity-controller/post-collection-resource-user-post';
import { putItemResourceUserPut } from '../fn/user-entity-controller/put-item-resource-user-put';
import { PutItemResourceUserPut$Params } from '../fn/user-entity-controller/put-item-resource-user-put';
import { UserResponse } from '../models/user-response';

@Injectable({ providedIn: 'root' })
export class UserEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceUserGet1()` */
  static readonly GetCollectionResourceUserGet1Path = '/users';

  /**
   * get-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceUserGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUserGet1$Json$Response(params?: GetCollectionResourceUserGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelUser>> {
    return getCollectionResourceUserGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceUserGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUserGet1$Json(params?: GetCollectionResourceUserGet1$Json$Params, context?: HttpContext): Observable<CollectionModelEntityModelUser> {
    return this.getCollectionResourceUserGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelUser>): CollectionModelEntityModelUser => r.body)
    );
  }

  /**
   * get-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceUserGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUserGet1$UriList$Response(params?: GetCollectionResourceUserGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceUserGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceUserGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceUserGet1$UriList(params?: GetCollectionResourceUserGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceUserGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceUserPost()` */
  static readonly PostCollectionResourceUserPostPath = '/users';

  /**
   * create-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceUserPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceUserPost$Response(params: PostCollectionResourceUserPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return postCollectionResourceUserPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceUserPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceUserPost(params: PostCollectionResourceUserPost$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.postCollectionResourceUserPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `getItemResourceUserGet1()` */
  static readonly GetItemResourceUserGet1Path = '/users/{id}';

  /**
   * get-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceUserGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceUserGet1$Response(params: GetItemResourceUserGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<(UserResponse | EntityModelUser)>> {
    return getItemResourceUserGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceUserGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceUserGet1(params: GetItemResourceUserGet1$Params, context?: HttpContext): Observable<(UserResponse | EntityModelUser)> {
    return this.getItemResourceUserGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<(UserResponse | EntityModelUser)>): (UserResponse | EntityModelUser) => r.body)
    );
  }

  /** Path part for operation `putItemResourceUserPut()` */
  static readonly PutItemResourceUserPutPath = '/users/{id}';

  /**
   * update-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceUserPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceUserPut$Response(params: PutItemResourceUserPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return putItemResourceUserPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceUserPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceUserPut(params: PutItemResourceUserPut$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.putItemResourceUserPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceUserDelete()` */
  static readonly DeleteItemResourceUserDeletePath = '/users/{id}';

  /**
   * delete-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceUserDelete$Response(params: DeleteItemResourceUserDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceUserDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceUserDelete(params: DeleteItemResourceUserDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceUserDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceUserPatch()` */
  static readonly PatchItemResourceUserPatchPath = '/users/{id}';

  /**
   * patch-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceUserPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceUserPatch$Response(params: PatchItemResourceUserPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return patchItemResourceUserPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceUserPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceUserPatch(params: PatchItemResourceUserPatch$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.patchItemResourceUserPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

}
