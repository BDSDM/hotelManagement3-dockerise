import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { ConfirmLogoutDialogComponent } from './features/confirm-logout-dialog/confirm-logout-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { HomepageComponent } from './features/homepage/homepage.component';
import { BookingDialogComponent } from './features/booking-dialog/booking-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { RoomDialogComponent } from './features/room-dialog/room-dialog.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CancelBookingDialogComponent } from './features/cancel-booking-dialog/cancel-booking-dialog.component';
import { ConfirmDeleteDialogComponent } from './features/confirm-delete-dialog/confirm-delete-dialog.component';
import { RefreshTokenPopupComponent } from './features/refresh-token-popup/refresh-token-popup.component';
import { RequestResetPasswordComponent } from './features/request-reset-password/request-reset-password.component';
import { ConfirmResetPasswordComponent } from './features/confirm-reset-password/confirm-reset-password.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UpdateUserDialogComponent } from './features/update-user-dialog/update-user-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConfirmDeleteUserDialogComponent } from './features/confirm-delete-user-dialog/confirm-delete-user-dialog.component';
import { AdminpowerComponent } from './features/adminpower/adminpower.component';
import { ConfirmAdminActivationComponent } from './features/confirm-admin-activation/confirm-admin-activation.component';
import { AdminRequiredComponent } from './features/admin-required/admin-required.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ConfirmLogoutDialogComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    BookingDialogComponent,
    RoomDialogComponent,
    RoomsComponent,
    CancelBookingDialogComponent,
    ConfirmDeleteDialogComponent,
    RefreshTokenPopupComponent,
    RequestResetPasswordComponent,
    ConfirmResetPasswordComponent,
    DashboardComponent,
    UpdateUserDialogComponent,
    ConfirmDeleteUserDialogComponent,
    AdminpowerComponent,
    ConfirmAdminActivationComponent,
    AdminRequiredComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatChipsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
