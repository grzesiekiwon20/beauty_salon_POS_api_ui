/* tslint:disable */
/* eslint-disable */
import { LocalTime } from '../models/local-time';

/**
 * Activity Model Information
 */
export interface ActivityResponse {
  createdBy?: number;
  createdDate?: string;
  date?: string;
  deposit?: number;
  depositPaid?: boolean;
  employeeId?: number;
  finishTime?: LocalTime;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  remarks?: string;
  startTime?: LocalTime;
  taskDone?: boolean;
  typeId?: number;
  userId?: number;
}
