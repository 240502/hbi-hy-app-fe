import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CheckinComponent } from '@features/checkin/checkin.component';
import { UserLayoutComponent } from '@features/layouts/user-layout/user-layout.component';
export const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Trang chủ',
      },
      { path: 'checkin', component: CheckinComponent, title: 'CheckIn' },
    ],
  },
];
