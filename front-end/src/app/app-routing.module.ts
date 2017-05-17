import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { UserRoleViewComponent } from './user-role-view/user-role-view.component';
import { UserRoleEditComponent } from './user-role-edit/user-role-edit.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListAllComponent } from './list-all/list-all.component';

const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'group', component: GroupComponent },
  { path: 'permissions', component: UserRoleViewComponent },
  { path: 'edit-permissions', component: UserRoleEditComponent },
  { path: 'list-all', component: ListAllComponent },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default url
  { path: '**', component: LoginComponent } // Wrong path ==> 404 url
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }