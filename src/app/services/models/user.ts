/* tslint:disable */
/* eslint-disable */
import { Activity } from '../models/activity';
import { Address } from '../models/address';
import { GrantedAuthority } from '../models/granted-authority';
import { Role } from '../models/role';
export interface User {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  activities?: Array<Activity>;
  addresses?: Array<Address>;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email: string;
  enabled?: boolean;
  firstName: string;
  fullName?: string;
  id?: number;
  lastModifiedDate?: string;
  lastName: string;
  name?: string;
  password: string;
  phoneNumber: string;
  roleList?: Array<Role>;
  username?: string;
}
