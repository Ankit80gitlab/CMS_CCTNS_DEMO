import { Component } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';

@Component({
  selector: 'app-session-timeout',
  templateUrl: './session-timeout.component.html',
  styleUrls: ['./session-timeout.component.css']
})
export class SessionTimeoutComponent {

  ngOnInit() {
    this.configureIdleLogout();
  }

  constructor(private idle: Idle) { }

  idleTime: number = 2000;

  configureIdleLogout() {
    this.idle.setIdle(this.idleTime);
    this.idle.setTimeout(10); // This is the time it takes to trigger the timeout event
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.onIdleEnd.subscribe(() => console.log('No longer idle.'));
    this.idle.onTimeout.subscribe(() => { this.logout() });
    //this.idle.onInterrupt.subscribe(() => console.log("no more idle"));
    
    this.idle.watch();
  }

  logout() {
    alert("Inactive session");
    sessionStorage.removeItem("LoginValue");
    window.location.href = "cctns/login";
  }

}
