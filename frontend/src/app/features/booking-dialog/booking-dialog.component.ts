import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingService } from 'src/app/core/services/booking.service';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css'],
})
export class BookingDialogComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { room: any; userId: number }
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      checkInDate: [null, Validators.required],
      checkOutDate: [null, Validators.required],
    });
  }

  private formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onConfirm(): void {
    if (this.bookingForm.invalid) {
      return;
    }

    const checkInDate: Date = this.bookingForm.get('checkInDate')!.value;
    const checkOutDate: Date = this.bookingForm.get('checkOutDate')!.value;
    const roomId = this.data.room.id;
    const userId = this.data.userId;

    if (!userId || !roomId) {
      console.log(roomId);
      console.log(!userId);
      alert('Identifiants manquants pour la réservation');
      return;
    }

    // Format local pour éviter le décalage
    const checkInDateStr = this.formatDateToYYYYMMDD(checkInDate);
    const checkOutDateStr = this.formatDateToYYYYMMDD(checkOutDate);

    this.bookingService
      .createBooking(userId, roomId, checkInDateStr, checkOutDateStr)
      .subscribe({
        next: () => {
          this.snackBar.open('Réservation confirmée', 'Fermer', {
            duration: 3000,
          });
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Erreur lors de la réservation', err);
          console.log('userId ' + userId + ' roomId ' + roomId);
          alert('Erreur lors de la réservation');
        },
      });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
