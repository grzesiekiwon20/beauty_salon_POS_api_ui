/* tslint:disable */
/* eslint-disable */
import { ActivityResponse } from '../models/activity-response';
import { Links } from '../models/links';
export interface CollectionModelActivity {
  '_embedded'?: {
'activities'?: Array<ActivityResponse>;
};
  '_links'?: Links;
}
