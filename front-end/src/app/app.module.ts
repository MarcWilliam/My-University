import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import {
  RegistrationComponent,
  LoginComponent,
  HomeComponent,
  DashboardComponent,
  GroupComponent,
  UserRoleViewComponent,
  ListAllComponent,
  UserRoleEditComponent,
  EditProfileComponent,
  EditCourseComponent,
  EditDepartementComponent,
  EditSemesterComponent,
  EnrollmentComponent
} from './components';

import { AuthHttpModule } from './modules';
import { FormsModule } from '@angular/forms';
import { MdDataTableModule } from 'ng2-md-datatable';

import { AuthenticationGuard } from './guards';

import { CallbackPipe } from './pipes';

import {
  ServiceFactory,
  CRUDService,
  UserService,
  AuthenticationService,
  UserRoleService,
  CourseService,
  DepartmentService,
  SemesterService,
  GroupService,
  CourseOfferingService,
  CourseOfferingEnrollmentService,
} from './services';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    GroupComponent,
    UserRoleViewComponent,
    ListAllComponent,
    UserRoleEditComponent,
    EditProfileComponent,
    EditCourseComponent,
    EditDepartementComponent,
    EditSemesterComponent,
    EnrollmentComponent,
    CallbackPipe

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AuthHttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MdDataTableModule
  ],
  providers: [
    ServiceFactory,
    CRUDService,
    UserService,
    AuthenticationService,
    UserRoleService,
    CourseService,
    AuthenticationGuard,
    DepartmentService,
    SemesterService,
    GroupService,
    CourseOfferingService,
    CourseOfferingEnrollmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
