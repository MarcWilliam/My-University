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

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { UserRoleViewComponent } from './user-role-view/user-role-view.component';
import { ListAllComponent } from './list-all/list-all.component';
import { UserRoleEditComponent } from './user-role-edit/user-role-edit.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { EditSemesterComponent } from './edit-semester/edit-semester.component';

import { CRUDService } from './CRUD.service';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';

import { AuthHttpModule } from './auth-http.module';
import { FormsModule } from '@angular/forms';
import { MdDataTableModule } from 'ng2-md-datatable';


import { AuthenticationGuard } from './authentication.guard';
import { ServiceFactory } from './service-factory';

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
	EditSemesterComponent

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
  providers: [ServiceFactory, CRUDService, UserService, AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
