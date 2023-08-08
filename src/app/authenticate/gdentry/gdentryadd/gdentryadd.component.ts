import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-gdentryadd',
  templateUrl: './gdentryadd.component.html',
  styleUrls: ['./gdentryadd.component.css']
})
export class GdentryaddComponent {
  url: string = "";
  datePipe: DatePipe = new DatePipe('en-US');
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private appcom: AppComponent,
  ) {

  }
  getFormattedDate() {

    var date = new Date();
    var transformDate = this.datePipe.transform(date, "dd/ MM/ yyyy, h:mm:");
    return transformDate;

  }
  ngOnInit() {

  }

}

