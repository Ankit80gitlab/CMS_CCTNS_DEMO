import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideUserIdleConfig } from 'angular-user-idle';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './authenticate/common/dashboard/dashboard.component';
import { IntFooterComponent } from './redirection/footer/int-footer.component';
import { IntHeaderComponent } from './redirection/header/int-header.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './redirection/navigation/nav.component';
import { ExtHeaderComponent } from './redirection/header/ext-header.component';
import { ExtFooterComponent } from './redirection/footer/ext-footer.component';
import { GdentryaddComponent } from './authenticate/gdentry/gdentryadd/gdentryadd.component';
import { GdentryviewComponent } from './authenticate/gdentry/gdentryview/gdentryview.component';
import { ExtNavComponent } from './redirection/navigation/ext-nav.component';
import { AboutUsComponent } from './externalcomponent/aboutus.component';
import { HomeComponent } from './externalcomponent/home.component';
import { CitizenInformationComponent } from './externalcomponent/citizeninformation.component';
import { OnlineServicesComponent } from './externalcomponent/onlineservices.component';
import { GalleryComponent } from './externalcomponent/gallery.component';
import { ContactUsComponent } from './externalcomponent/contactus.component';
import { SessionTimeoutComponent } from './authenticate/session-timeout/session-timeout.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { GdentryComponent } from './authenticate/gdentry/gdentry/gdentry.component';
import { LogoutDialogboxComponent } from './dialogbox/logout-dialogbox/logout-dialogbox.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './externalcomponent/register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { RegistrationDialogboxComponent } from './dialogbox/registration-dialogbox/registration-dialogbox.component';
import { UserInfoDownloadComponent } from './authenticate/transaction/user-info-download/user-info-download.component';
import { DownloadConfirmationDialogboxComponent } from './dialogbox/download-confirmation-dialogbox/download-confirmation-dialogbox.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IntFooterComponent,
    IntHeaderComponent,
    LoginComponent,
    NavComponent,
    ExtHeaderComponent,
    ExtFooterComponent,
    GdentryaddComponent,
    GdentryviewComponent,
    ExtNavComponent,
    HomeComponent,
    CitizenInformationComponent,
    OnlineServicesComponent,
    GalleryComponent,
    ContactUsComponent,
    SessionTimeoutComponent,
    GdentryComponent,
    LogoutDialogboxComponent,
    RegisterComponent,
    RegistrationDialogboxComponent,
    UserInfoDownloadComponent,
    DownloadConfirmationDialogboxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgIdleKeepaliveModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,

  ],
  providers: [provideUserIdleConfig({ idle: 10, timeout: 10, ping: 10 })],
  bootstrap: [AppComponent]
})
export class AppModule { }