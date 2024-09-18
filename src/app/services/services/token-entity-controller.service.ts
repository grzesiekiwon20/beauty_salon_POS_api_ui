/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceTokenDelete } from '../fn/token-entity-controller/delete-item-resource-token-delete';
import { DeleteItemResourceTokenDelete$Params } from '../fn/token-entity-controller/delete-item-resource-token-delete';
import { EntityModelToken } from '../models/entity-model-token';
import { getCollectionResourceTokenGet1$Json } from '../fn/token-entity-controller/get-collection-resource-token-get-1-json';
import { GetCollectionResourceTokenGet1$Json$Params } from '../fn/token-entity-controller/get-collection-resource-token-get-1-json';
import { getCollectionResourceTokenGet1$UriList } from '../fn/token-entity-controller/get-collection-resource-token-get-1-uri-list';
import { GetCollectionResourceTokenGet1$UriList$Params } from '../fn/token-entity-controller/get-collection-resource-token-get-1-uri-list';
import { getItemResourceTokenGet } from '../fn/token-entity-controller/get-item-resource-token-get';
import { GetItemResourceTokenGet$Params } from '../fn/token-entity-controller/get-item-resource-token-get';
import { PagedModelEntityModelToken } from '../models/paged-model-entity-model-token';
import { patchItemResourceTokenPatch } from '../fn/token-entity-controller/patch-item-resource-token-patch';
import { PatchItemResourceTokenPatch$Params } from '../fn/token-entity-controller/patch-item-resource-token-patch';
import { postCollectionResourceTokenPost } from '../fn/token-entity-controller/post-collection-resource-token-post';
import { PostCollectionResourceTokenPost$Params } from '../fn/token-entity-controller/post-collection-resource-token-post';
import { putItemResourceTokenPut } from '../fn/token-entity-controller/put-item-resource-token-put';
import { PutItemResourceTokenPut$Params } from '../fn/token-entity-controller/put-item-resource-token-put';

@Injectable({ providedIn: 'root' })
export class TokenEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceTokenGet1()` */
  static readonly GetCollectionResourceTokenGet1Path = '/tokens';

  /**
   * get-token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceTokenGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTokenGet1$Json$Response(params?: GetCollectionResourceTokenGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelToken>> {
    return getCollectionResourceTokenGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-token
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceTokenGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTokenGet1$Json(params?: GetCollectionResourceTokenGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelToken> {
    return this.getCollectionResourceTokenGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelToken>): PagedModelEntityModelToken => r.body)
    );
  }

  /**
   * get-token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceTokenGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTokenGet1$UriList$Response(params?: GetCollectionResourceTokenGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceTokenGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-token
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceTokenGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTokenGet1$UriList(params?: GetCollectionResourceTokenGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceTokenGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceTokenPost()` */
  static readonly PostCollectionResourceTokenPostPath = '/tokens';

  /**
   * create-token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceTokenPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceTokenPost$Response(params: PostCollectionResourceTokenPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelToken>> {
    return postCollectionResourceTokenPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-token
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceTokenPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceTokenPost(params: PostCollectionResourceTokenPost$Params, context?: HttpContext): Observable<EntityModelToken> {
    return this.postCollectionResourceTokenPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelToken>): EntityModelToken => r.body)
    );
  }

  /** Path part for operation `getItemResourceTokenGet()` */
  static readonly GetItemResourceTokenGetPath = '/tokens/{id}';

  /**
   * get-token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceTokenGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceTokenGet$Response(params: GetItemResourceTokenGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelToken>> {
    return getItemResourceTokenGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-token
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceTokenGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceTokenGet(params: GetItemResourceTokenGet$Params, context?: HttpContext): Observable<EntityModelToken> {
    return this.getItemResourceTokenGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelToken>): EntityModelToken => r.body)
    );
  }

  /** Path part for operation `putItemResourceTokenPut()` */
  static readonly PutItemResourceTokenPutPath = '/tokens/{id}';

  /**
   * update-token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceTokenPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceTokenPut$Response(params: PutItemResourceTokenPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelToken>> {
    return putItemResourceTokenPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-token
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceTokenPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceTokenPut(params: PutItemResourceTokenPut$Params, context?: HttpContext): Observable<EntityModelToken> {
    return this.putItemResourceTokenPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelToken>): EntityModelToken => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceTokenDelete()` */
  static readonly DeleteItemResourceTokenDeletePath = '/tokens/{id}';

  /**
   * delete-token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceTokenDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceTokenDelete$Response(params: DeleteItemResourceTokenDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceTokenDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-token
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceTokenDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceTokenDelete(params: DeleteItemResourceTokenDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceTokenDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceTokenPatch()` */
  static readonly PatchItemResourceTokenPatchPath = '/tokens/{id}';

  /**
   * patch-token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceTokenPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceTokenPatch$Response(params: PatchItemResourceTokenPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelToken>> {
    return patchItemResourceTokenPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-token
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceTokenPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceTokenPatch(params: PatchItemResourceTokenPatch$Params, context?: HttpContext): Observable<EntityModelToken> {
    return this.patchItemResourceTokenPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelToken>): EntityModelToken => r.body)
    );
  }

}
