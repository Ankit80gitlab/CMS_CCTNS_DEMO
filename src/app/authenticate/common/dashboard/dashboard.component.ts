import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Menu } from '../../../models/Menu';
import { AppComponent } from 'src/app/app.component';
import { UserIdleService } from 'angular-user-idle';
@Component({
  selector: 'app-board',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  form!: FormGroup;
  name = 'Angular ';
  pageType: boolean = true;
  url: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appcom: AppComponent,
    private userIdle: UserIdleService,
  ) { }


  ngOnInit() {
    //this.function();
  }

  function() {
    //Start watching for user inactivity.
    this.userIdle.startWatching();
    console.log("start watching called");

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      alert('Time is up!');
      sessionStorage.removeItem("LoginValue");
      window.location.href = "cctns/login";
      this.form.reset();
    });
  }
}
