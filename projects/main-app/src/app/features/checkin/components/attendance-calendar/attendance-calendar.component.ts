import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { MatCardModule } from '@angular/material/card';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter } from '@angular/material/core';

// Đăng ký locale tiếng Việt
registerLocaleData(localeVi);

@Component({
  selector: 'app-attendance-calendar',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.scss'],
})
export class AttendanceCalendarComponent {
  // 🗓️ Trạng thái tháng hiện tại (để quản lý state)
  currentView = new Date();

  // Dữ liệu chấm công
  workingDays = ['2025-11-01', '2025-11-02', '2025-11-03'];
  absentDays = ['2025-11-04', '2025-11-05'];
  leaveDays = ['2025-11-06'];

  constructor(private adapter: DateAdapter<Date>) {
    // ✅ Đặt ngôn ngữ cho lịch sang tiếng Việt
    this.adapter.setLocale('vi-VN');
  }

  // ✅ Gán class cho từng ngày
  dateClass = (d: Date) => {
    const date = d.toLocaleDateString('en-CA'); // YYYY-MM-DD
    if (this.workingDays.includes(date)) return 'work-day';
    if (this.absentDays.includes(date)) return 'absent-day';
    if (this.leaveDays.includes(date)) return 'leave-day';
    return '';
  };

  // ✅ Khi người dùng đổi tháng/năm
  onMonthSelected(date: Date) {
    this.currentView = new Date(date);
  }

  // ✅ Bắt sự kiện khi chọn năm
  onYearSelected(date: Date) {
    this.currentView = new Date(date);
  }
}
