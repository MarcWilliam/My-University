import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // Default url
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
export class AppRoutingModule {}