import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Booking {
  id?: number;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  room: {
    id: number;
  };
  user: {
    id: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = `${environment.apiUrlBooking}/booking`; // ✅ utilise environment

  constructor(private http: HttpClient) {}

  createBooking(
    userId: number,
    roomId: number,
    checkInDate: string,
    checkOutDate: string
  ): Observable<string> {
    const url = `${
      this.baseUrl
    }/create/${userId}/${roomId}/${encodeURIComponent(
      checkInDate
    )}/${encodeURIComponent(checkOutDate)}`;
    return this.http.post(url, null, { responseType: 'text' });
  }

  cancelBooking(bookingId: number): Observable<string> {
    return this.http.put(`${this.baseUrl}/cancel/${bookingId}`, null, {
      responseType: 'text',
    });
  }

  getBookingsByUser(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/user/${userId}`);
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/all`);
  }
}
