import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { TrashComponent } from './components/trash/trash.component';
import { NotesComponent } from './components/notes/notes.component';
import {ArchiveComponent} from './components/archive/archive.component';
import {AuthGuard} from './services/authguard/auth.guard';
import {SearchbarComponent} from './components/searchbar/searchbar.component' 
import { LabelsComponent } from './components/labels/labels.component';
import { RemindersComponent } from './components/reminders/reminders.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'',component:DashboardComponent , canActivate: [AuthGuard], children:[{
    path:'notes',component:NotesComponent 
  },{
    path:'trash',component:TrashComponent 
  },{
    path:'archive',component:ArchiveComponent 
  },{
    path:'search',component:SearchbarComponent 
  },{
    path:'labels/:labelname',component:LabelsComponent 
  },{
    path:'reminders',component:RemindersComponent 
  }
  ]},
  {path:'resetpassword/:token',component:ResetComponent},
  {path:'**',redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
