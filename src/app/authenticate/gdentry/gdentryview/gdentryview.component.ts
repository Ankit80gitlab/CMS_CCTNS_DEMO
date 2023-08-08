import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-gdentryview',
  templateUrl: './gdentryview.component.html',
  styleUrls: ['./gdentryview.component.css']
})


export class GdentryviewComponent {
  url:string="";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appcom:AppComponent, 
  ) { 
    
  }
  ngOnInit() {   
}
}

