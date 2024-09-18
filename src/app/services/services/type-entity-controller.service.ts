/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceTypeDelete } from '../fn/type-entity-controller/delete-item-resource-type-delete';
import { DeleteItemResourceTypeDelete$Params } from '../fn/type-entity-controller/delete-item-resource-type-delete';
import { EntityModelType } from '../models/entity-model-type';
import { getCollectionResourceTypeGet1$Json } from '../fn/type-entity-controller/get-collection-resource-type-get-1-json';
import { GetCollectionResourceTypeGet1$Json$Params } from '../fn/type-entity-controller/get-collection-resource-type-get-1-json';
import { getCollectionResourceTypeGet1$UriList } from '../fn/type-entity-controller/get-collection-resource-type-get-1-uri-list';
import { GetCollectionResourceTypeGet1$UriList$Params } from '../fn/type-entity-controller/get-collection-resource-type-get-1-uri-list';
import { getItemResourceTypeGet } from '../fn/type-entity-controller/get-item-resource-type-get';
import { GetItemResourceTypeGet$Params } from '../fn/type-entity-controller/get-item-resource-type-get';
import { PagedModelEntityModelType } from '../models/paged-model-entity-model-type';
import { patchItemResourceTypePatch } from '../fn/type-entity-controller/patch-item-resource-type-patch';
import { PatchItemResourceTypePatch$Params } from '../fn/type-entity-controller/patch-item-resource-type-patch';
import { postCollectionResourceTypePost } from '../fn/type-entity-controller/post-collection-resource-type-post';
import { PostCollectionResourceTypePost$Params } from '../fn/type-entity-controller/post-collection-resource-type-post';
import { putItemResourceTypePut } from '../fn/type-entity-controller/put-item-resource-type-put';
import { PutItemResourceTypePut$Params } from '../fn/type-entity-controller/put-item-resource-type-put';

@Injectable({ providedIn: 'root' })
export class TypeEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceTypeGet1()` */
  static readonly GetCollectionResourceTypeGet1Path = '/types';

  /**
   * get-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceTypeGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTypeGet1$Json$Response(params?: GetCollectionResourceTypeGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelType>> {
    return getCollectionResourceTypeGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-type
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceTypeGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTypeGet1$Json(params?: GetCollectionResourceTypeGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelType> {
    return this.getCollectionResourceTypeGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelType>): PagedModelEntityModelType => r.body)
    );
  }

  /**
   * get-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceTypeGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTypeGet1$UriList$Response(params?: GetCollectionResourceTypeGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceTypeGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-type
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceTypeGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTypeGet1$UriList(params?: GetCollectionResourceTypeGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceTypeGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceTypePost()` */
  static readonly PostCollectionResourceTypePostPath = '/types';

  /**
   * create-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceTypePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceTypePost$Response(params: PostCollectionResourceTypePost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelType>> {
    return postCollectionResourceTypePost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-type
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceTypePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceTypePost(params: PostCollectionResourceTypePost$Params, context?: HttpContext): Observable<EntityModelType> {
    return this.postCollectionResourceTypePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelType>): EntityModelType => r.body)
    );
  }

  /** Path part for operation `getItemResourceTypeGet()` */
  static readonly GetItemResourceTypeGetPath = '/types/{id}';

  /**
   * get-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceTypeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceTypeGet$Response(params: GetItemResourceTypeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelType>> {
    return getItemResourceTypeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-type
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceTypeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceTypeGet(params: GetItemResourceTypeGet$Params, context?: HttpContext): Observable<EntityModelType> {
    return this.getItemResourceTypeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelType>): EntityModelType => r.body)
    );
  }

  /** Path part for operation `putItemResourceTypePut()` */
  static readonly PutItemResourceTypePutPath = '/types/{id}';

  /**
   * update-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceTypePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceTypePut$Response(params: PutItemResourceTypePut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelType>> {
    return putItemResourceTypePut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-type
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceTypePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceTypePut(params: PutItemResourceTypePut$Params, context?: HttpContext): Observable<EntityModelType> {
    return this.putItemResourceTypePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelType>): EntityModelType => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceTypeDelete()` */
  static readonly DeleteItemResourceTypeDeletePath = '/types/{id}';

  /**
   * delete-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceTypeDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceTypeDelete$Response(params: DeleteItemResourceTypeDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceTypeDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-type
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceTypeDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceTypeDelete(params: DeleteItemResourceTypeDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceTypeDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceTypePatch()` */
  static readonly PatchItemResourceTypePatchPath = '/types/{id}';

  /**
   * patch-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceTypePatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceTypePatch$Response(params: PatchItemResourceTypePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelType>> {
    return patchItemResourceTypePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-type
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceTypePatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceTypePatch(params: PatchItemResourceTypePatch$Params, context?: HttpContext): Observable<EntityModelType> {
    return this.patchItemResourceTypePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelType>): EntityModelType => r.body)
    );
  }

}
