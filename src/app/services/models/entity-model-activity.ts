/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
import { LocalTime } from '../models/local-time';
export interface EntityModelActivity {
  '_links'?: Links;
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
