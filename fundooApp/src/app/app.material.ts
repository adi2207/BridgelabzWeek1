import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatDividerModule
],

exports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
MatDividerModule
],
})
export class AppMaterialModule { }
