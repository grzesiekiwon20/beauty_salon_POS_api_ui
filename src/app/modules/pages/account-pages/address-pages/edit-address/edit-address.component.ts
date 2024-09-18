import {Component, OnInit} from '@angular/core';
import {AddressRequest} from "../../../../../services/models/address-request";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {AddressService} from "../../../../../services/services/address.service";
import {AddressResponse} from "../../../../../services/models/address-response";
import {AddressDetailsComponent} from "../address-details/address-details.component";
import {ActivatedRoute, Router} from "@angular/router";
import {UpdateAddress$Params} from "../../../../../services/fn/address/update-address";

@Component({
  selector: 'app-edit-address',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.scss'
})
export class EditAddressComponent implements OnInit {

  private address: AddressResponse = {};
  addressRequest: AddressRequest = {addressId: 0, street: '', city: '', postCode: '', addressType: ''};
  private addressId = 0
  type: string | undefined = ''
  message= '';
  errorMsg : Array<string> = [];
  level : 'success' | 'error' = 'success';

  constructor(
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addressId = this.activatedRoute.snapshot.params['addressId'];
    this.addressService.getAddressResponseById({'addressId': this.addressId})
      .subscribe({
        next: (res) =>{
          this.address = res
          if (this.address.addressType != null) {
            this.addressRequest.addressType = this.address.addressType
          }
          this.type = this.address.addressType
        }
      })
  }

  onSubmit() {
    this.errorMsg = [];
    if (this.addressId) {
      this.addressService.updateAddress({
        'addressId': this.addressId,
        body: this.addressRequest
      }).subscribe({
        next: (addressId) =>{
          this.addressId = addressId
          this.level = "success"
          this.message = "Address successfully updated"
        },
          error: err => {
            console.log(err);
            this.level = 'error';
            this.message = err.error.error
          }
      })
    }
  }

}
