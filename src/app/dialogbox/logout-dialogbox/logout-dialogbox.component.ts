import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { logOutData } from 'src/app/redirection/navigation/nav.component';

@Component({
  selector: 'app-logout-dialogbox',
  templateUrl: './logout-dialogbox.component.html',
  styleUrls: ['./logout-dialogbox.component.css']
})
export class LogoutDialogboxComponent {

  constructor(
    public dialogRef: MatDialogRef<LogoutDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: logOutData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
