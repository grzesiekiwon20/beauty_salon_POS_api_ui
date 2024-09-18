import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AddressRequest} from "../../../../../services/models/address-request";
import {AddressService} from "../../../../../services/services/address.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.scss'
})
export class AddAddressComponent implements OnInit {

  addressRequest: AddressRequest = {addressId: 0, street: '', city: '', postCode: '', addressType: ''}
  errorMsg : Array<string> = [];
  level : 'success' | 'error' = 'success'
  message = ''

  constructor(
    private addressService: AddressService
  ) {}

  onSubmit() {
    this.errorMsg = [];
    this.addressService.createAddress({
      body: this.addressRequest
    }).subscribe(
      {
        next: value => {
          this.level = "success"
          this.message = 'Address successfully created'
          console.log(value)
        },
        error: err => {
          console.log(err);
          this.level = 'error';
          this.message = err.error.error
        }
      }
    );
  }
  ngOnInit(): void {

  }

}
