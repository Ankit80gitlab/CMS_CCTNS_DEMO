import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { LoginDialogBoxComponent } from './dialogbox/login-dialog-box/login-dialog-box.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

export interface loggedInDialogData {
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 16 Crud example';
  pageType = false;
  login = false;
  currentRoute: string = "";
  form!: FormGroup;
  loading = false;
  submitted = false;
  ret = false;
  urlListInt = ["/cctns/dashboard", "/cctns/gdentry", "/cctns/gdentry/add", "/cctns/gdentry/view"];
  urlListExt = ["/cctns/login"];
  url = "";

  constructor(private dialog: MatDialog, private router: Router) { }


  ngOnInit() {
    var urlPath = location.pathname;
    var lv = sessionStorage.getItem("LoginValue");
    if (lv != null && lv == "True") { // loggedin user
      if (this.urlListInt.includes(urlPath)) {
        this.pageType = true;
        this.router.navigateByUrl("/cctns/dashboard");
        this.openDialogForLogIn();
      }
      else {
        this.pageType = false;
        this.router.navigateByUrl('');
      }
    }
  }

  openDialogForLogIn() {
    //alert("console called");
    this.dialog.open(LoginDialogBoxComponent, {
      data: {
        name: localStorage.getItem('name'),
        role: localStorage.getItem('role')
      },
    });
  }
}