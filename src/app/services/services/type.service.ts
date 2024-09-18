/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createType } from '../fn/type/create-type';
import { CreateType$Params } from '../fn/type/create-type';
import { getAllTypes } from '../fn/type/get-all-types';
import { GetAllTypes$Params } from '../fn/type/get-all-types';
import { getTypeById } from '../fn/type/get-type-by-id';
import { GetTypeById$Params } from '../fn/type/get-type-by-id';
import { TypeResponse } from '../models/type-response';
import { uploadTypeCoverPicture } from '../fn/type/upload-type-cover-picture';
import { UploadTypeCoverPicture$Params } from '../fn/type/upload-type-cover-picture';


/**
 * The Type Api
 */
@Injectable({ providedIn: 'root' })
export class TypeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createType()` */
  static readonly CreateTypePath = '/types/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createType()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createType$Response(params: CreateType$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createType(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createType$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createType(params: CreateType$Params, context?: HttpContext): Observable<number> {
    return this.createType$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadTypeCoverPicture()` */
  static readonly UploadTypeCoverPicturePath = '/types/cover/{type-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadTypeCoverPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadTypeCoverPicture$Response(params: UploadTypeCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadTypeCoverPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadTypeCoverPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadTypeCoverPicture(params: UploadTypeCoverPicture$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadTypeCoverPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getTypeById()` */
  static readonly GetTypeByIdPath = '/types/typeId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTypeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTypeById$Response(params: GetTypeById$Params, context?: HttpContext): Observable<StrictHttpResponse<TypeResponse>> {
    return getTypeById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTypeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTypeById(params: GetTypeById$Params, context?: HttpContext): Observable<TypeResponse> {
    return this.getTypeById$Response(params, context).pipe(
      map((r: StrictHttpResponse<TypeResponse>): TypeResponse => r.body)
    );
  }

  /** Path part for operation `getAllTypes()` */
  static readonly GetAllTypesPath = '/types/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTypes$Response(params?: GetAllTypes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TypeResponse>>> {
    return getAllTypes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTypes(params?: GetAllTypes$Params, context?: HttpContext): Observable<Array<TypeResponse>> {
    return this.getAllTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TypeResponse>>): Array<TypeResponse> => r.body)
    );
  }

}
