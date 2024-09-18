/* tslint:disable */
/* eslint-disable */
import { EntityModelToken } from '../models/entity-model-token';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelToken {
  '_embedded'?: {
'tokens'?: Array<EntityModelToken>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
