import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './authenticate/common/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { GdentryaddComponent } from './authenticate/gdentry/gdentryadd/gdentryadd.component';
import { GdentryviewComponent } from './authenticate/gdentry/gdentryview/gdentryview.component';
import { AboutUsComponent } from './externalcomponent/aboutus.component';
import { HomeComponent } from './externalcomponent/home.component';
import { CitizenInformationComponent } from './externalcomponent/citizeninformation.component';
import { OnlineServicesComponent } from './externalcomponent/onlineservices.component';
import { GalleryComponent } from './externalcomponent/gallery.component';
import { ContactUsComponent } from './externalcomponent/contactus.component';
import { GdentryComponent } from './authenticate/gdentry/gdentry/gdentry.component';
import { RegisterComponent } from './externalcomponent/register/register.component';
import { UserInfoDownloadComponent } from './authenticate/transaction/user-info-download/user-info-download.component';
import { downloadUserInfoGuard } from './guard/download-user-info.guard';
import { AddViewGdentryGuard } from './guard/add-view-gdentry.guard';
import { dataLossGuard } from './guard/data-loss.guard';


const routes: Routes = [
  { path: '', redirectTo: 'cctns/home', pathMatch: 'full' },
  { path: 'cctns/home', component: HomeComponent },
  { path: 'cctns/dashboard', component: DashboardComponent },
  { path: 'cctns/login', component: LoginComponent },
  {
    path: 'cctns/gdentry', component: GdentryComponent, canActivateChild:[AddViewGdentryGuard], children: [
      { path: 'add', component: GdentryaddComponent,},
      { path: 'view', component: GdentryviewComponent},]
  },
  { path: 'cctns/aboutus', component: AboutUsComponent },
  { path: 'cctns/citizeninformation', component: CitizenInformationComponent },
  { path: 'cctns/onlineservices', component: OnlineServicesComponent },
  { path: 'cctns/gallery', component: GalleryComponent },
  { path: 'cctns/register', component: RegisterComponent, canDeactivate:[dataLossGuard]},
  { path: 'cctns/download', component: UserInfoDownloadComponent, canActivate: [downloadUserInfoGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }