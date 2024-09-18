import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AddressResponse} from "../../../../../services/models/address-response";
import {AddressService} from "../../../../../services/services/address.service";
import {NgForOf, NgSwitch} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TypeResponse} from "../../../../../services/models/type-response";

@Component({
  selector: 'app-address-details',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet,
    NgSwitch,
    FormsModule
  ],
  templateUrl: './address-details.component.html',
  styleUrl: './address-details.component.scss'
})
export class AddressDetailsComponent implements OnInit {
  addressResponseArray: Array<AddressResponse> = [];

  constructor(
    private addressService: AddressService,
  ) {
  }

  ngOnInit(): void {
    this.findAllAddresses();
  }
  private findAllAddresses(){
    this.addressService.getAddressesResponseForConnectedUser().subscribe(
      res =>
        this.addressResponseArray = res
    )
  }
}
