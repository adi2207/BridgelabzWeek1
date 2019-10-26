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
import { TakenoteComponent } from './components/takenote/takenote.component';
import { DisplaycardsComponent } from './components/displaycards/displaycards.component';
import { NotesComponent } from './components/notes/notes.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AuthService } from './services/auth.service/auth.service';
import { AuthGuard } from './services/authguard/auth.guard';
import { SearchfilterPipe } from './services/search.filter.pipe/searchfilter.pipe';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { LabeldialogboxComponent } from './components/labeldialogbox/labeldialogbox.component';
import { ColorsiconComponent } from './components/colorsicon/colorsicon.component';
import { ArchiveiconComponent } from './components/archiveicon/archiveicon.component';
import { ImageiconComponent } from './components/imageicon/imageicon.component';
import { CollaboratoriconComponent } from './components/collaboratoricon/collaboratoricon.component';
import { RemindmeiconComponent } from './components/remindmeicon/remindmeicon.component';
import { MoremenuComponent } from './components/moremenu/moremenu.component';
import { IcontrayComponent } from './components/icontray/icontray.component';
import { LabelsComponent } from './components/labels/labels.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ChangeUserImageComponent } from './components/change-user-image/change-user-image.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {CollaboratordialogboxComponent} from './components/collaboratordialogbox/collaboratordialogbox.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { QuestionanswerComponent } from './components/questionanswer/questionanswer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
    TakenoteComponent,
    DisplaycardsComponent,
    DialogboxComponent,
    NotesComponent,
    TrashComponent,
    ArchiveComponent,
    SearchfilterPipe,
    SearchbarComponent,
    LabeldialogboxComponent,
    ColorsiconComponent,
    ArchiveiconComponent,
    ImageiconComponent,
    CollaboratoriconComponent,
    RemindmeiconComponent,
    MoremenuComponent,
    IcontrayComponent,
    LabelsComponent,
    ChecklistComponent,
    ChangeUserImageComponent,
    CollaboratordialogboxComponent,
    QuestionanswerComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule
  ],
  providers: [UserService,AuthGuard,AuthService,MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [DialogboxComponent,LabeldialogboxComponent,ChangeUserImageComponent,CollaboratordialogboxComponent]
})
export class AppModule { }
