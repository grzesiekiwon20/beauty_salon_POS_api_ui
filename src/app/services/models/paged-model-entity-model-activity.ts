/* tslint:disable */
/* eslint-disable */
import { EntityModelActivity } from '../models/entity-model-activity';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelActivity {
  '_embedded'?: {
'activities'?: Array<EntityModelActivity>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
