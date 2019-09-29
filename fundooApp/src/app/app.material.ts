import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatDividerModule,
MatSidenavModule,
MatButtonToggleModule,
MatIconModule
],

exports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatDividerModule,
MatSidenavModule,
MatButtonToggleModule,
MatIconModule
],
})
export class AppMaterialModule { }
