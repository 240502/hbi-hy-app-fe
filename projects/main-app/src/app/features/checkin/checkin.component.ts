import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { AttendanceCalendarComponent } from './components/attendance-calendar/attendance-calendar.component';
@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatGridList,
    MatGridTile,
    AttendanceCalendarComponent,
  ],
  standalone: true,
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.scss',
})
export class CheckinComponent {}
