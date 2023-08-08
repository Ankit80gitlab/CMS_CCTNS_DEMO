import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistrationDialogboxComponent } from 'src/app/dialogbox/registration-dialogbox/registration-dialogbox.component';
import { userData } from 'src/app/models/employee';
import { AuthenticationService } from 'src/app/services/authentication.service';

interface Location {
  value: string;
  viewValue: string;
}

export interface registration {
  generatedUserId2: any;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authServ: AuthenticationService, private dialog: MatDialog, private router: Router) { }

  generatedUserId: any;

  location: Location[] = [
    { value: 'mumbai', viewValue: 'Mumbai' },
    { value: 'delhi', viewValue: 'Delhi' },
    { value: 'bangalore', viewValue: 'Bangalore' },
  ];

  signUpForm = new FormGroup({
    "name": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required]),
    "location": new FormControl('', [Validators.required])
  })

  ngOnInit() {
    //this.check2();
    this.isUserRegistered=false;

  }

  isUserRegistered:boolean=false;

  register() {
    let prefix = "";
    let suffix = 0;
    let duplicate = false;

    if (this.signUpForm.getRawValue().location == 'bangalore') {
      prefix = "KA";
    } else if (this.signUpForm.getRawValue().location == 'delhi') {
      prefix = "DL";
    } else if (this.signUpForm.getRawValue().location == 'mumbai') {
      prefix = "MH";
    }
    suffix = Math.floor(100000000 + Math.random() * 900000000);
    this.generatedUserId = prefix + suffix;

    let userData: Array<userData> = [];
    //let duplicateUserId = "KA597962656";
    this.authServ.fetchAllUser().subscribe(resp => {
      for (let i of resp) {
        userData.push(i);
      }
      for (let i of userData) {
        if (i.userid == this.generatedUserId) {
          duplicate = true;
          break;
        }
      }
      if (!duplicate) {
        console.log(this.generatedUserId);
        this.authServ.register({
          "name": this.signUpForm.getRawValue().name,
          "email": this.signUpForm.getRawValue().email,
          "userid": this.generatedUserId,
          "password": this.signUpForm.getRawValue().password,
          "role": "user",
          "location": this.signUpForm.getRawValue().location
        }).subscribe(resp => {
          //console.log(resp);
          this.openDialogForRegistration();
          this.isUserRegistered=true;
          this.router.navigateByUrl("cctns/login");
        })
      } else {
        alert("Duplicate user id found")
        this.signUpForm.reset();
      }
    })
  }

  dataArray: Array<any> = [];

  openDialogForRegistration() {
    this.dialog.open(RegistrationDialogboxComponent, {
      data: { generatedUserId2: this.generatedUserId },
    });
  }

  check2() {
    //this.router.navigateByUrl('/login');
    this.authServ.fetchAllUser().subscribe(resp => {
      for (let i of resp) {
        this.dataArray.push(i);
      }
      for (let j of this.dataArray) {
        console.log(j.userid);

      }
    })
  }


}