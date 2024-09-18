/* tslint:disable */
/* eslint-disable */
import { EntityModelType } from '../models/entity-model-type';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelType {
  '_embedded'?: {
'types'?: Array<EntityModelType>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
