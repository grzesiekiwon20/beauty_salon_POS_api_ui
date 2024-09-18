/* tslint:disable */
/* eslint-disable */
import { LocalTime } from '../models/local-time';
export interface ActivityRequest {
  date?: string;
  deposit?: number;
  depositPaid?: boolean;
  employeeId?: number;
  finishTime?: LocalTime;
  id?: number;
  remarks?: string;
  startTime?: LocalTime;
  taskDone?: boolean;
  typeId?: number;
  userId?: number;
}
