/* tslint:disable */
/* eslint-disable */
import { EntityModelAddress } from '../models/entity-model-address';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelAddress {
  '_embedded'?: {
'addresses'?: Array<EntityModelAddress>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
