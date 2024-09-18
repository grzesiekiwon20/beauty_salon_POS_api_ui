/* tslint:disable */
/* eslint-disable */
import { LocalTime } from '../models/local-time';
export interface ActivityResponse {
  createdBy?: number;
  createdDate?: string;
  date?: string;
  deposit?: number;
  depositPaid?: boolean;
  employeeId?: number;
  finishTime?: LocalTime;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  remarks?: string;
  startTime?: LocalTime;
  taskDone?: boolean;
  typeId?: number;
  userId?: number;
}
