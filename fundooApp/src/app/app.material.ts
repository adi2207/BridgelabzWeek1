import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatDividerModule,
MatProgressSpinnerModule
],

exports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatDividerModule,
MatProgressSpinnerModule
],
})
export class AppMaterialModule { }
