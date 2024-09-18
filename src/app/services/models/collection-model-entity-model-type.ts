/* tslint:disable */
/* eslint-disable */
import { EntityModelType } from '../models/entity-model-type';
import { Links } from '../models/links';
export interface CollectionModelEntityModelType {
  '_embedded'?: {
'types'?: Array<EntityModelType>;
};
  '_links'?: Links;
}
