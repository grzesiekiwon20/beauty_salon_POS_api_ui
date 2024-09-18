import { Component } from '@angular/core';
import {TypeResponse} from "../../../../services/models/type-response";
import {ActivatedRoute} from "@angular/router";
import {TypeService} from "../../../../services/services/type.service";

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [],
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.scss'
})
export class ServicesDetailsComponent {
  type: TypeResponse = {};
  private typeId = 0

  constructor(
    private typeService: TypeService,
    private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.typeId = this.activatedRoute.snapshot.params['typeId'];
    if (this.typeId) {
      this.typeService.getTypeById({
        'id' : this.typeId
      }).subscribe({
        next: (type) => {
          this.type = type;
        }
      });
    }
  }

}
