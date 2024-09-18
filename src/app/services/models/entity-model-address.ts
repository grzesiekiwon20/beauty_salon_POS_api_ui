/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
export interface EntityModelAddress {
  '_links'?: Links;
  addressType?: string;
  city?: string;
  createdBy?: number;
  createdDate?: string;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  postCode?: string;
  street?: string;
  userId?: number;
}
