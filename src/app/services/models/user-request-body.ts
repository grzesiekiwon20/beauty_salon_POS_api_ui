/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
export interface UserRequestBody {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  activities?: Array<string>;
  addresses?: Array<string>;
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
  roleList?: Array<string>;
  username?: string;
}
