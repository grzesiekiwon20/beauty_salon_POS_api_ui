/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AddressResponse } from '../models/address-response';
import { createAddress } from '../fn/address/create-address';
import { CreateAddress$Params } from '../fn/address/create-address';
import { getAddressesResponseForConnectedUser } from '../fn/address/get-addresses-response-for-connected-user';
import { GetAddressesResponseForConnectedUser$Params } from '../fn/address/get-addresses-response-for-connected-user';
import { getAddressResponseById } from '../fn/address/get-address-response-by-id';
import { GetAddressResponseById$Params } from '../fn/address/get-address-response-by-id';
import { getAllAddressResponse } from '../fn/address/get-all-address-response';
import { GetAllAddressResponse$Params } from '../fn/address/get-all-address-response';
import { removeAddressById } from '../fn/address/remove-address-by-id';
import { RemoveAddressById$Params } from '../fn/address/remove-address-by-id';
import { updateAddress } from '../fn/address/update-address';
import { UpdateAddress$Params } from '../fn/address/update-address';


/**
 * The Address Api
 */
@Injectable({ providedIn: 'root' })
export class AddressService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateAddress()` */
  static readonly UpdateAddressPath = '/address/update-address/{addressId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAddress$Response(params: UpdateAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAddress(params: UpdateAddress$Params, context?: HttpContext): Observable<number> {
    return this.updateAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `createAddress()` */
  static readonly CreateAddressPath = '/address/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAddress$Response(params: CreateAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAddress(params: CreateAddress$Params, context?: HttpContext): Observable<number> {
    return this.createAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAddressResponseById()` */
  static readonly GetAddressResponseByIdPath = '/address/{addressId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAddressResponseById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressResponseById$Response(params: GetAddressResponseById$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressResponse>> {
    return getAddressResponseById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAddressResponseById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressResponseById(params: GetAddressResponseById$Params, context?: HttpContext): Observable<AddressResponse> {
    return this.getAddressResponseById$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddressResponse>): AddressResponse => r.body)
    );
  }

  /** Path part for operation `getAddressesResponseForConnectedUser()` */
  static readonly GetAddressesResponseForConnectedUserPath = '/address/userId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAddressesResponseForConnectedUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressesResponseForConnectedUser$Response(params?: GetAddressesResponseForConnectedUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AddressResponse>>> {
    return getAddressesResponseForConnectedUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAddressesResponseForConnectedUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressesResponseForConnectedUser(params?: GetAddressesResponseForConnectedUser$Params, context?: HttpContext): Observable<Array<AddressResponse>> {
    return this.getAddressesResponseForConnectedUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AddressResponse>>): Array<AddressResponse> => r.body)
    );
  }

  /** Path part for operation `getAllAddressResponse()` */
  static readonly GetAllAddressResponsePath = '/address/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllAddressResponse()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAddressResponse$Response(params?: GetAllAddressResponse$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AddressResponse>>> {
    return getAllAddressResponse(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllAddressResponse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAddressResponse(params?: GetAllAddressResponse$Params, context?: HttpContext): Observable<Array<AddressResponse>> {
    return this.getAllAddressResponse$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AddressResponse>>): Array<AddressResponse> => r.body)
    );
  }

  /** Path part for operation `removeAddressById()` */
  static readonly RemoveAddressByIdPath = '/address/remove/{addressId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeAddressById()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeAddressById$Response(params: RemoveAddressById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return removeAddressById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeAddressById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeAddressById(params: RemoveAddressById$Params, context?: HttpContext): Observable<void> {
    return this.removeAddressById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
