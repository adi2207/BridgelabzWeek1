import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { TakenoteComponent } from './components/takenote/takenote.component';
import{IconsComponent} from './components/icons/icons.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'takenote',component:TakenoteComponent},
  {path:'icons',component:IconsComponent},
  {path:'resetpassword/:token',component:ResetComponent},
  {path:'**',redirectTo:'/login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
