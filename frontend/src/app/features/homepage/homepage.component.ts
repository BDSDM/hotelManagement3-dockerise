import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoomService } from 'src/app/core/services/room.service';
import { BookingService } from 'src/app/core/services/booking.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmailService } from 'src/app/core/services/email.service';
import { CancelBookingDialogComponent } from '../cancel-booking-dialog/cancel-booking-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  userName: string = '';
  userId: number = 0;
  rooms: any[] = [];
  confirmationMessage: string = '';
  userEmail: string = '';
  isSendingInvoice: boolean = false; // Indicateur d'envoi
  sendingInvoiceRoomId: number | null = null; // ID de la chambre en cours d'envoi

  constructor(
    private roomService: RoomService,
    private bookingService: BookingService,
    private authService: AuthService,
    private dialog: MatDialog,
    private emailService: EmailService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserName() || '';
    this.userId = this.authService.getUserId() || 0;
    this.userEmail = this.authService.getUserEmail() || '';
    this.loadRooms();
  }

  loadRooms(): void {
    this.roomService.getAllRooms().subscribe(
      (rooms) => {
        console.log('Données brutes des rooms:', rooms);
        this.rooms = rooms.map((room: any) => ({
          ...room,
          bookingId: room.bookingId || null,
          checkInDate: room.checkInDate || null,
          checkOutDate: room.checkOutDate || null,
          bookedBy: room.bookedBy || null,
          imageUrl: room.imageUrl || null,
        }));

        this.rooms.forEach((room) => {
          console.log(`Room ${room.number} - Réservée par : ${room.bookedBy}`);
          console.log('images: ' + room.imageUrl);
          console.log('room: ' + room);
        });
      },
      (error) => {
        console.error('Erreur lors du chargement des chambres', error);
      }
    );
  }

  openBookingDialog(room: any): void {
    if (!this.userId) {
      alert('Utilisateur non identifié, veuillez vous reconnecter.');
      return;
    }

    const dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '400px',
      data: { room: room, userId: this.userId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadRooms();
      }
    });
  }

  cancelBooking(bookingId: number | null, roomNumber?: string): void {
    if (!bookingId) {
      console.error('bookingId est null ou invalide, annulation impossible.');
      return;
    }

    const dialogRef = this.dialog.open(CancelBookingDialogComponent, {
      width: '400px',
      data: { bookingId, roomNumber }, // ✅ passer roomNumber ici
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.bookingService.cancelBooking(bookingId).subscribe(
          () => this.loadRooms(),
          (error) => {
            console.error("Erreur lors de l'annulation", error);
            alert("Impossible d'annuler la réservation.");
          }
        );
      } else {
        console.log('Annulation abandonnée par l’utilisateur');
      }
    });
  }

  sendInvoice(room: any): void {
    this.sendingInvoiceRoomId = room.id || room.number; // marque uniquement cette chambre

    const email = this.userEmail || 'client@example.com';
    const userName = this.userName || 'client';
    const price = room.price || 0;

    const formatDate = (dateInput: any): string => {
      let date: Date;
      if (typeof dateInput === 'string') {
        date = new Date(dateInput);
      } else if (dateInput instanceof Date) {
        date = dateInput;
      } else {
        return 'date non précisée';
      }
      const months = [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre',
      ];
      return `${date.getDate().toString().padStart(2, '0')} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`;
    };

    const checkIn = room.checkInDate
      ? formatDate(room.checkInDate)
      : 'non précisée';
    const checkOut = room.checkOutDate
      ? formatDate(room.checkOutDate)
      : 'non précisée';

    const subject = 'Votre facture - Hôtel';
    const body = `Bonjour ${userName},

Nous vous remercions pour votre réservation.

🛏️ Chambre n°${room.number}
📅 Du ${checkIn} au ${checkOut}
💶 ${price}€

Cordialement,
L’équipe HotelManager`;

    this.emailService.sendInvoice(email, subject, body).subscribe({
      next: (response) => {
        this.sendingInvoiceRoomId = null; // fin envoi
        this.snackBar.open('Facture envoyée par mail avec succès', 'Fermer', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        this.confirmationMessage = response;
      },
      error: (error) => {
        this.sendingInvoiceRoomId = null; // fin envoi
        this.confirmationMessage = 'Erreur lors de l’envoi.';
        console.error(error);
      },
    });
  }
}
