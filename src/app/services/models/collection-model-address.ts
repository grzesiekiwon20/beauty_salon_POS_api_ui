/* tslint:disable */
/* eslint-disable */
import { AddressResponse } from '../models/address-response';
import { Links } from '../models/links';
export interface CollectionModelAddress {
  '_embedded'?: {
'addresses'?: Array<AddressResponse>;
};
  '_links'?: Links;
}
