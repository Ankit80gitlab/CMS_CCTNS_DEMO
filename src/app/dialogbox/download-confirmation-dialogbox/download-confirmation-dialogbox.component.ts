import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogDataDownload } from 'src/app/authenticate/transaction/user-info-download/user-info-download.component';

@Component({
  selector: 'app-download-confirmation-dialogbox',
  templateUrl: './download-confirmation-dialogbox.component.html',
  styleUrls: ['./download-confirmation-dialogbox.component.css']
})
export class DownloadConfirmationDialogboxComponent {

  constructor(
    public dialogRef: MatDialogRef<DownloadConfirmationDialogboxComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogDataDownload,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
