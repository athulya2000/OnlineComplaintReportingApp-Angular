import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavBarprofileComponent } from './nav-barprofile/nav-barprofile.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"register",
    component:UserRegistrationComponent
  },
  {
    path:"signin",
    component:UserSigninComponent
  },
  {
    path:"profile",
    component:UserProfileComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserSigninComponent,
    NavBarComponent,
    UserProfileComponent,
    NavBarprofileComponent,
    AdminNavbarComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
