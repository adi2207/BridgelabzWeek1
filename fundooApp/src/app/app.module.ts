import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppMaterialModule} from './app.material';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {UserService} from './services/user.services/user.service'
import { HttpClientModule} from '@angular/common/http';
import {DialogboxComponent} from './components/dialogbox/dialogbox.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IconsComponent } from './components/icons/icons.component';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { DisplaycardsComponent } from './components/displaycards/displaycards.component';
//import { ErrorComponent } from './components/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
    IconsComponent,
    TakenoteComponent,
    DisplaycardsComponent,
    DialogboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [DialogboxComponent]
})
export class AppModule { }
