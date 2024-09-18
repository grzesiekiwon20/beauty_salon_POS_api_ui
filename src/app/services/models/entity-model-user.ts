/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Links } from '../models/links';
export interface EntityModelUser {
  '_links'?: Links;
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email: string;
  enabled?: boolean;
  firstName: string;
  fullName?: string;
  lastModifiedDate?: string;
  lastName: string;
  name?: string;
  password: string;
  phoneNumber: string;
  username?: string;
}
