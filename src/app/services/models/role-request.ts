/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface RoleRequest {
  id?: number;
  name: string;
  users?: Array<User>;
}
