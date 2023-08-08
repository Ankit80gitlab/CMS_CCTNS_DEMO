import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { registration } from 'src/app/externalcomponent/register/register.component';

@Component({
  selector: 'app-registration-dialogbox',
  templateUrl: './registration-dialogbox.component.html',
  styleUrls: ['./registration-dialogbox.component.css']
})
export class RegistrationDialogboxComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: registration) {}


}
