import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ActivityResponse} from "../../../../services/models/activity-response";
import {ActivityService} from "../../../../services/services/activity.service";

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.scss'
})
export class BookingDetailsComponent implements OnInit {

  activityResponse: Array<ActivityResponse> = [];


  constructor(
    private activityService: ActivityService
  ) {
  }

  ngOnInit(): void {
    this.activityService.getActivitiesByConnectedUserId()
      .subscribe({
        next: value => {
          this.activityResponse = value
        }
      })
  }

  formatString(str: string | undefined) {

  }
}
