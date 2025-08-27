import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component'; // adapte le chemin si nécessaire
import { HomeComponent } from './features/home/home.component'; // adapte le chemin si nécessaire
import { HomepageComponent } from './features/homepage/homepage.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { ConfirmResetPasswordComponent } from './features/confirm-reset-password/confirm-reset-password.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DashboardGuard } from './core/guards/dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'homepage', component: HomepageComponent },
      {
        path: 'rooms',
        component: RoomsComponent,
        canActivate: [DashboardGuard],
      },
      { path: 'reset-password', component: ConfirmResetPasswordComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [DashboardGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
