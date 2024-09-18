/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceAddressDelete } from '../fn/address-entity-controller/delete-item-resource-address-delete';
import { DeleteItemResourceAddressDelete$Params } from '../fn/address-entity-controller/delete-item-resource-address-delete';
import { EntityModelAddress } from '../models/entity-model-address';
import { getCollectionResourceAddressGet1$Json } from '../fn/address-entity-controller/get-collection-resource-address-get-1-json';
import { GetCollectionResourceAddressGet1$Json$Params } from '../fn/address-entity-controller/get-collection-resource-address-get-1-json';
import { getCollectionResourceAddressGet1$UriList } from '../fn/address-entity-controller/get-collection-resource-address-get-1-uri-list';
import { GetCollectionResourceAddressGet1$UriList$Params } from '../fn/address-entity-controller/get-collection-resource-address-get-1-uri-list';
import { getItemResourceAddressGet } from '../fn/address-entity-controller/get-item-resource-address-get';
import { GetItemResourceAddressGet$Params } from '../fn/address-entity-controller/get-item-resource-address-get';
import { PagedModelEntityModelAddress } from '../models/paged-model-entity-model-address';
import { patchItemResourceAddressPatch } from '../fn/address-entity-controller/patch-item-resource-address-patch';
import { PatchItemResourceAddressPatch$Params } from '../fn/address-entity-controller/patch-item-resource-address-patch';
import { postCollectionResourceAddressPost } from '../fn/address-entity-controller/post-collection-resource-address-post';
import { PostCollectionResourceAddressPost$Params } from '../fn/address-entity-controller/post-collection-resource-address-post';
import { putItemResourceAddressPut } from '../fn/address-entity-controller/put-item-resource-address-put';
import { PutItemResourceAddressPut$Params } from '../fn/address-entity-controller/put-item-resource-address-put';

@Injectable({ providedIn: 'root' })
export class AddressEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceAddressGet1()` */
  static readonly GetCollectionResourceAddressGet1Path = '/addresses';

  /**
   * get-address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceAddressGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceAddressGet1$Json$Response(params?: GetCollectionResourceAddressGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelAddress>> {
    return getCollectionResourceAddressGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceAddressGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceAddressGet1$Json(params?: GetCollectionResourceAddressGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelAddress> {
    return this.getCollectionResourceAddressGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelAddress>): PagedModelEntityModelAddress => r.body)
    );
  }

  /**
   * get-address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceAddressGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceAddressGet1$UriList$Response(params?: GetCollectionResourceAddressGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceAddressGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceAddressGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceAddressGet1$UriList(params?: GetCollectionResourceAddressGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceAddressGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceAddressPost()` */
  static readonly PostCollectionResourceAddressPostPath = '/addresses';

  /**
   * create-address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceAddressPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceAddressPost$Response(params: PostCollectionResourceAddressPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return postCollectionResourceAddressPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-address
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceAddressPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceAddressPost(params: PostCollectionResourceAddressPost$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.postCollectionResourceAddressPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /** Path part for operation `getItemResourceAddressGet()` */
  static readonly GetItemResourceAddressGetPath = '/addresses/{id}';

  /**
   * get-address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceAddressGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceAddressGet$Response(params: GetItemResourceAddressGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return getItemResourceAddressGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceAddressGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceAddressGet(params: GetItemResourceAddressGet$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.getItemResourceAddressGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /** Path part for operation `putItemResourceAddressPut()` */
  static readonly PutItemResourceAddressPutPath = '/addresses/{id}';

  /**
   * update-address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceAddressPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceAddressPut$Response(params: PutItemResourceAddressPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return putItemResourceAddressPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-address
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceAddressPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceAddressPut(params: PutItemResourceAddressPut$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.putItemResourceAddressPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceAddressDelete()` */
  static readonly DeleteItemResourceAddressDeletePath = '/addresses/{id}';

  /**
   * delete-address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceAddressDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceAddressDelete$Response(params: DeleteItemResourceAddressDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceAddressDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-address
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceAddressDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceAddressDelete(params: DeleteItemResourceAddressDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceAddressDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceAddressPatch()` */
  static readonly PatchItemResourceAddressPatchPath = '/addresses/{id}';

  /**
   * patch-address
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceAddressPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceAddressPatch$Response(params: PatchItemResourceAddressPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return patchItemResourceAddressPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-address
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceAddressPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceAddressPatch(params: PatchItemResourceAddressPatch$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.patchItemResourceAddressPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

}
