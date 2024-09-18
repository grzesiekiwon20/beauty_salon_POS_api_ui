import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./pages/main/main.component";
import {authGuard} from "../notopenaiservices/auth-guard/auth-guard.service";
import {ServicesListComponent} from "./pages/service-type-pages/services-list/services-list.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {AccountComponent} from "./components/account/account.component";
import {UserDetailsComponent} from "./pages/account-pages/user-details/user-details.component";
import {AddressDetailsComponent} from "./pages/account-pages/address-pages/address-details/address-details.component";
import {BookingDetailsComponent} from "./pages/account-pages/booking-details/booking-details.component";
import {AddAddressComponent} from "./pages/account-pages/address-pages/add-address/add-address.component";
import {EditAddressComponent} from "./pages/account-pages/address-pages/edit-address/edit-address.component";
import {RemoveAddressComponent} from "./pages/account-pages/address-pages/remove-address/remove-address.component";
import {TypeCardComponent} from "./components/type-card/type-card.component";
import {ManageTypeComponent} from "./pages/service-type-pages/manage-type/manage-type.component";
import {ServicesDetailsComponent} from "./pages/service-type-pages/services-details/services-details.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ServicesListComponent,
      },
      {
        path: 'details/:typeId', component: ServicesDetailsComponent, canActivate: [authGuard]
      },
      {
        path: 'manage' , component: ManageTypeComponent, canActivate:[authGuard]
      },
      {
        path: 'account', component: AccountComponent, canActivate: [authGuard],
        children: [
          {path: 'user-details', component: UserDetailsComponent, canActivate: [authGuard]},
          {path: 'address-details', component: AddressDetailsComponent, canActivate: [authGuard],
            children: [
              {path: 'add-address', component: AddAddressComponent, canActivate: [authGuard]},
              {path: 'edit-address/:addressId', component: EditAddressComponent, canActivate: [authGuard]},
              {path: 'remove-address', component:RemoveAddressComponent, canActivate: [authGuard]}
            ]},
          {path: 'booking-details', component: BookingDetailsComponent, canActivate:[authGuard]}
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {
}
