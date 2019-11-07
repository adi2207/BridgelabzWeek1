import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GetusersComponent } from './components/getusers/getusers.component';
import { AuthService } from './services/authservice/auth.service';
import { AuthGuard } from './services/authguard/auth.guard';
//import {MatButtonModule} from '@angular/material/button';

import { UnapprovedAnswersComponent } from './components/unapproved-answers/unapproved-answers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    GetusersComponent,
    UnapprovedAnswersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MatButtonModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
