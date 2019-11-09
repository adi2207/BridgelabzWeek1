import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatDividerModule,
MatStepperModule,
MatSidenavModule,
MatButtonToggleModule,
MatIconModule,
MatToolbarModule,
MatListModule,
MatExpansionModule,
MatMenuModule,
MatChipsModule,
MatTooltipModule,
MatGridListModule,
MatDialogModule,
MatTabsModule,
ImageCropperModule,
MatSnackBarModule,
MatAutocompleteModule,
CdkStepperModule,
MatCheckboxModule

],

exports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatStepperModule,
MatDividerModule,
MatSidenavModule,
MatButtonToggleModule,
MatIconModule,
MatToolbarModule,
MatListModule,
MatExpansionModule,
MatMenuModule,
MatChipsModule,
MatTooltipModule,
MatGridListModule,
MatDialogModule,
MatTabsModule,
ImageCropperModule,
MatSnackBarModule,
MatAutocompleteModule,
CdkStepperModule,
MatCheckboxModule
],
})
export class AppMaterialModule { }
