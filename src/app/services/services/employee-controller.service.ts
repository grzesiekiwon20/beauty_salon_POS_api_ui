/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createEmployee } from '../fn/employee-controller/create-employee';
import { CreateEmployee$Params } from '../fn/employee-controller/create-employee';
import { EmployeeResponse } from '../models/employee-response';
import { getAllEmployees } from '../fn/employee-controller/get-all-employees';
import { GetAllEmployees$Params } from '../fn/employee-controller/get-all-employees';

@Injectable({ providedIn: 'root' })
export class EmployeeControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createEmployee()` */
  static readonly CreateEmployeePath = '/employees/createEmployee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEmployee()` instead.
   *
   * This method doesn't expect any request body.
   */
  createEmployee$Response(params: CreateEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return createEmployee(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createEmployee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createEmployee(params: CreateEmployee$Params, context?: HttpContext): Observable<number> {
    return this.createEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAllEmployees()` */
  static readonly GetAllEmployeesPath = '/employees/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllEmployees()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEmployees$Response(params?: GetAllEmployees$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EmployeeResponse>>> {
    return getAllEmployees(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllEmployees$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEmployees(params?: GetAllEmployees$Params, context?: HttpContext): Observable<Array<EmployeeResponse>> {
    return this.getAllEmployees$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EmployeeResponse>>): Array<EmployeeResponse> => r.body)
    );
  }

}
