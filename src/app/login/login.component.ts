import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MenuService } from '../services/menu.service';
import { UserIdleService } from 'angular-user-idle';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { userData } from '../models/employee';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogBoxComponent } from '../dialogbox/login-dialog-box/login-dialog-box.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Angular 16 Crud example';
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userIdle: UserIdleService,
    private appcom: AppComponent,
    private menuservice: MenuService,
    private authServ: AuthenticationService,
    private dialog: MatDialog) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      userid: ['KA597962656', Validators.required],
      password: ['Test@123', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } { return this.form.controls; }

  login() {
    let isUserAuthorized: boolean;
    let userDataArray: Array<userData> = [];
    this.authServ.fetchAllUser().subscribe(resp => {
      for (let i of resp) {
        userDataArray.push(i);
      }
      for (let i of userDataArray) {
        if (this.f.userid.value == i.userid && this.f.password.value == i.password) {
          isUserAuthorized = true;
          localStorage.setItem('name', i.name);
          localStorage.setItem('role', i.role);
          localStorage.setItem('location', i.location);
          break;
        }
      }
      if (isUserAuthorized) {
        sessionStorage.setItem("LoginValue", "True");
        sessionStorage.setItem("userMenu", JSON.stringify(this.menuservice.getMenu()));
        window.location.href = "cctns/dashboard";
      }
      else {
        this.router.navigateByUrl('cctns/login');
        this.form.reset();
      }
    })
  }
}