/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ActivityResponse } from '../models/activity-response';
import { getActivitiesByConnectedUserId } from '../fn/activity/get-activities-by-connected-user-id';
import { GetActivitiesByConnectedUserId$Params } from '../fn/activity/get-activities-by-connected-user-id';
import { getActivitiesByUserId } from '../fn/activity/get-activities-by-user-id';
import { GetActivitiesByUserId$Params } from '../fn/activity/get-activities-by-user-id';
import { getAllActivities } from '../fn/activity/get-all-activities';
import { GetAllActivities$Params } from '../fn/activity/get-all-activities';
import { saveActivityByEmployee } from '../fn/activity/save-activity-by-employee';
import { SaveActivityByEmployee$Params } from '../fn/activity/save-activity-by-employee';
import { saveActivityByUser } from '../fn/activity/save-activity-by-user';
import { SaveActivityByUser$Params } from '../fn/activity/save-activity-by-user';


/**
 * The Activity Api
 */
@Injectable({ providedIn: 'root' })
export class ActivityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveActivityByUser()` */
  static readonly SaveActivityByUserPath = '/activities/create/usr/{typeId}/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveActivityByUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveActivityByUser$Response(params: SaveActivityByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveActivityByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveActivityByUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveActivityByUser(params: SaveActivityByUser$Params, context?: HttpContext): Observable<number> {
    return this.saveActivityByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `saveActivityByEmployee()` */
  static readonly SaveActivityByEmployeePath = '/activities/create/emp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveActivityByEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveActivityByEmployee$Response(params: SaveActivityByEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveActivityByEmployee(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveActivityByEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveActivityByEmployee(params: SaveActivityByEmployee$Params, context?: HttpContext): Observable<number> {
    return this.saveActivityByEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getActivitiesByUserId()` */
  static readonly GetActivitiesByUserIdPath = '/activities/{activityId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActivitiesByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivitiesByUserId$Response(params: GetActivitiesByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<ActivityResponse>> {
    return getActivitiesByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActivitiesByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivitiesByUserId(params: GetActivitiesByUserId$Params, context?: HttpContext): Observable<ActivityResponse> {
    return this.getActivitiesByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ActivityResponse>): ActivityResponse => r.body)
    );
  }

  /** Path part for operation `getActivitiesByConnectedUserId()` */
  static readonly GetActivitiesByConnectedUserIdPath = '/activities/userId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActivitiesByConnectedUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivitiesByConnectedUserId$Response(params?: GetActivitiesByConnectedUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityResponse>>> {
    return getActivitiesByConnectedUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActivitiesByConnectedUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivitiesByConnectedUserId(params?: GetActivitiesByConnectedUserId$Params, context?: HttpContext): Observable<Array<ActivityResponse>> {
    return this.getActivitiesByConnectedUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ActivityResponse>>): Array<ActivityResponse> => r.body)
    );
  }

  /** Path part for operation `getAllActivities()` */
  static readonly GetAllActivitiesPath = '/activities/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllActivities()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllActivities$Response(params?: GetAllActivities$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityResponse>>> {
    return getAllActivities(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllActivities$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllActivities(params?: GetAllActivities$Params, context?: HttpContext): Observable<Array<ActivityResponse>> {
    return this.getAllActivities$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ActivityResponse>>): Array<ActivityResponse> => r.body)
    );
  }

}
