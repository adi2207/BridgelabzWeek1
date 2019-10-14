import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GetusersComponent } from './components/getusers/getusers.component';
import { AuthService } from './services/auth.service/auth.service';
import { AuthGuard } from './services/authguard/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    GetusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
