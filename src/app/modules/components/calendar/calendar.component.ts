import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  monthNames: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  today: Date = new Date();
  currentMonth: number = this.today.getMonth();
  currentYear: number = this.today.getFullYear();
  daysInMonth: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.renderCalendar(this.currentMonth, this.currentYear);
  }

  renderCalendar(month: number, year: number): void {
    this.daysInMonth = [];

    const firstDay = new Date(year, month).getDay();
    const totalDaysInMonth = 32 - new Date(year, month, 32).getDate();

    for (let i = 0; i < firstDay; i++) {
      this.daysInMonth.push(0);
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
      this.daysInMonth.push(day);
    }
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.renderCalendar(this.currentMonth, this.currentYear);
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.renderCalendar(this.currentMonth, this.currentYear);
  }
}
