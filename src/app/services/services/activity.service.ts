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
import { getActivityByDate } from '../fn/activity/get-activity-by-date';
import { GetActivityByDate$Params } from '../fn/activity/get-activity-by-date';
import { getActivityById } from '../fn/activity/get-activity-by-id';
import { GetActivityById$Params } from '../fn/activity/get-activity-by-id';
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
  static readonly SaveActivityByUserPath = '/activities/create/usr';

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
  static readonly SaveActivityByEmployeePath = '/activities/create/emp/{typeId}/{userId}';

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

  /** Path part for operation `getActivityById()` */
  static readonly GetActivityByIdPath = '/activities/{activityId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActivityById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivityById$Response(params: GetActivityById$Params, context?: HttpContext): Observable<StrictHttpResponse<ActivityResponse>> {
    return getActivityById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActivityById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivityById(params: GetActivityById$Params, context?: HttpContext): Observable<ActivityResponse> {
    return this.getActivityById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ActivityResponse>): ActivityResponse => r.body)
    );
  }

  /** Path part for operation `getActivityByDate()` */
  static readonly GetActivityByDatePath = '/activities/date';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActivityByDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivityByDate$Response(params: GetActivityByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ActivityResponse>>> {
    return getActivityByDate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActivityByDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActivityByDate(params: GetActivityByDate$Params, context?: HttpContext): Observable<Array<ActivityResponse>> {
    return this.getActivityByDate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ActivityResponse>>): Array<ActivityResponse> => r.body)
    );
  }

  /** Path part for operation `getActivitiesByConnectedUserId()` */
  static readonly GetActivitiesByConnectedUserIdPath = '/activities/connectedUser';

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
