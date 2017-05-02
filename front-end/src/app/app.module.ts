import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';

import { AppConfig } from './app.config';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';


import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard, AdminGuard, ProfessorGuard, StudentGuard } from './authentication.guard';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AppConfig, UserService, AuthenticationService, AuthenticationGuard, AdminGuard, ProfessorGuard, StudentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
