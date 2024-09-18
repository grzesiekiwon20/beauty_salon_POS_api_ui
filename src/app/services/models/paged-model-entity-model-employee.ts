/* tslint:disable */
/* eslint-disable */
import { EntityModelEmployee } from '../models/entity-model-employee';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelEmployee {
  '_embedded'?: {
'employees'?: Array<EntityModelEmployee>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
