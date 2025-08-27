import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css'],
})
export class ConfirmDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { itemName: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Renvoie "true" si l'utilisateur confirme
  }

  onCancel(): void {
    this.dialogRef.close(false); // Renvoie "false" si l'utilisateur annule
  }
}
