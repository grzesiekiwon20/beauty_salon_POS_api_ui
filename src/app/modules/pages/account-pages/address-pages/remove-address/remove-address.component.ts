import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddressResponse} from "../../../../../services/models/address-response";
import {AddressRequest} from "../../../../../services/models/address-request";
import {AddressService} from "../../../../../services/services/address.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-remove-address',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './remove-address.component.html',
  styleUrl: './remove-address.component.scss'
})
export class RemoveAddressComponent implements OnInit {

  private addressId = 0
  protected confirmQuestion = ''
  message = '';
  level: 'success' | 'error' = 'success';

  constructor(
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.addressId = this.activatedRoute.snapshot.params['addressId'];
    if (this.addressId) {
      this.confirmQuestion = 'Are you sure you want to remove this address?'
    }
  }

  onSubmit() {
    if (this.addressId) {
      this.addressService.removeAddressById({
        'addressId': this.addressId
      }).subscribe({
        next: () => {
          this.message = 'Address successfully deleted'
          this.level = 'success'
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
