import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from '../components/adminlogin/adminlogin.component'
import {GetusersComponent} from '../components/getusers/getusers.component'
import {AuthGuard} from '../services/authguard/auth.guard'
const routes: Routes = [
    {
        path: 'login',
        component: AdminloginComponent,
    },
    {
      path: 'getUsers',
      component: GetusersComponent,
      canActivate: [AuthGuard]
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
