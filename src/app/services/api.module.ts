/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ActivityEntityControllerService } from './services/activity-entity-controller.service';
import { AddressEntityControllerService } from './services/address-entity-controller.service';
import { EmployeeEntityControllerService } from './services/employee-entity-controller.service';
import { EmployeePropertyReferenceControllerService } from './services/employee-property-reference-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { RoleEntityControllerService } from './services/role-entity-controller.service';
import { RoleSearchControllerService } from './services/role-search-controller.service';
import { TokenEntityControllerService } from './services/token-entity-controller.service';
import { TokenSearchControllerService } from './services/token-search-controller.service';
import { TokenPropertyReferenceControllerService } from './services/token-property-reference-controller.service';
import { TypeEntityControllerService } from './services/type-entity-controller.service';
import { TypeSearchControllerService } from './services/type-search-controller.service';
import { UserEntityControllerService } from './services/user-entity-controller.service';
import { UserSearchControllerService } from './services/user-search-controller.service';
import { UserPropertyReferenceControllerService } from './services/user-property-reference-controller.service';
import { AddressService } from './services/address.service';
import { TypeService } from './services/type.service';
import { RoleControllerService } from './services/role-controller.service';
import { EmployeeControllerService } from './services/employee-controller.service';
import { AuthenticationService } from './services/authentication.service';
import { ActivityService } from './services/activity.service';
import { UserControllerService } from './services/user-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ActivityEntityControllerService,
    AddressEntityControllerService,
    EmployeeEntityControllerService,
    EmployeePropertyReferenceControllerService,
    ProfileControllerService,
    RoleEntityControllerService,
    RoleSearchControllerService,
    TokenEntityControllerService,
    TokenSearchControllerService,
    TokenPropertyReferenceControllerService,
    TypeEntityControllerService,
    TypeSearchControllerService,
    UserEntityControllerService,
    UserSearchControllerService,
    UserPropertyReferenceControllerService,
    AddressService,
    TypeService,
    RoleControllerService,
    EmployeeControllerService,
    AuthenticationService,
    ActivityService,
    UserControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
