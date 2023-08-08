import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loggedInDialogData } from 'src/app/app.component';


@Component({
  selector: 'app-login-dialog-box',
  templateUrl: './login-dialog-box.component.html',
  styleUrls: ['./login-dialog-box.component.css']
})
export class LoginDialogBoxComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: loggedInDialogData) { }

  ngOnInit() {
  }
}
