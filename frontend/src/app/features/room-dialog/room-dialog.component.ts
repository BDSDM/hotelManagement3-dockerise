import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/app/core/models/room.model';
import { FileUploadService } from 'src/app/core/services/file-upload.service';

@Component({
  selector: 'app-room-dialog',
  templateUrl: './room-dialog.component.html',
  styleUrls: ['./room-dialog.component.css'],
})
export class RoomDialogComponent {
  room: Room = {
    id: 0,
    number: '',
    type: '',
    price: null,
    available: true,
    imageUrl: '',
  };
  selectedFile: File | null = null;

  constructor(
    public dialogRef: MatDialogRef<RoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Room,
    private fileUploadService: FileUploadService
  ) {
    if (data) {
      this.room = { ...data };
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileUploadService.uploadImage(this.selectedFile).subscribe((url) => {
        this.room.imageUrl = url;
      });
    }
  }

  onSave(): void {
    this.dialogRef.close(this.room);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
