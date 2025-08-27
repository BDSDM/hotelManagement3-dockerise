import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-booking-dialog',
  templateUrl: './cancel-booking-dialog.component.html',
  styleUrls: ['./cancel-booking-dialog.component.css'],
})
export class CancelBookingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CancelBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { bookingId: number; roomNumber: string }
  ) {}

  onConfirmCancel(): void {
    this.dialogRef.close(true); // ✅ confirme l'annulation
  }

  onCancel(): void {
    this.dialogRef.close(false); // ❌ ferme le popup sans rien faire
  }
}
