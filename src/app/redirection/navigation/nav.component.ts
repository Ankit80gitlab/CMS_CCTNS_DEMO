import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Menu } from '../../models/Menu';
import { AppComponent } from '../../app.component';
import { MenuService } from '../../services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogboxComponent } from 'src/app/dialogbox/logout-dialogbox/logout-dialogbox.component';

export interface logOutData {
  result: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  form!: FormGroup;
  name = 'Angular ';
  menu: Menu[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appcom: AppComponent,
    private menuservice: MenuService,
    private dialog: MatDialog) {
    this.menu = JSON.parse(sessionStorage.getItem("userMenu") || "");
  }

  logoutConfirmed() {
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    localStorage.removeItem('location');
    sessionStorage.removeItem("LoginValue");
    sessionStorage.removeItem('userMenu');
    window.location.href = "cctns/login";
    this.form.reset();
  }

  logout(): void {
    const dialogRef = this.dialog.open(LogoutDialogboxComponent, {
      data: { name: "false" },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      if (result) {
        console.log("logging out");
        this.logoutConfirmed();

      } else {
        console.log("user denied");
      }
    });
  }
}
