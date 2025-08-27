import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private baseUrl = `${environment.apiUrlRoom}/room`; // ✅ utilise environment

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/all`);
  }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.baseUrl}/add`, room);
  }

  updateRoom(room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.baseUrl}/update`, room);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text',
    });
  }
}
