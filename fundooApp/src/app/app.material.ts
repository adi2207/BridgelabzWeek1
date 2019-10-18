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
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { ImageCropperModule } from 'ngx-image-cropper';






@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
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
ImageCropperModule
],

exports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
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
ImageCropperModule
],
})
export class AppMaterialModule { }
