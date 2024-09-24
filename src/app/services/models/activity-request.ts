/* tslint:disable */
/* eslint-disable */
import { LocalTime } from '../models/local-time';
export interface ActivityRequest {
  date?: string;
  deposit?: number;
  depositPaid?: boolean;
  employeeId?: number;
  finishTime?: string;
  id?: number;
  remarks?: string;
  startTime?: string;
  taskDone?: boolean;
  typeId?: number;
  userId?: number;
}
