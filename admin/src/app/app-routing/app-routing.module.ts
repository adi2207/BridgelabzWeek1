import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from '../components/adminlogin/adminlogin.component'
import {GetusersComponent} from '../components/getusers/getusers.component'
import {AuthGuard} from '../services/authguard/auth.guard'
import { UnapprovedAnswersComponent } from '../components/unapproved-answers/unapproved-answers.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
const routes: Routes = [
    {
        path: 'login',
        component: AdminloginComponent,
    },

{
    path: '',
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    children:[    {
        path: 'getUsers',
        component: GetusersComponent,
    },
    {
      path: 'unapprovedAnswers',
      component: UnapprovedAnswersComponent,
  },]
},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
