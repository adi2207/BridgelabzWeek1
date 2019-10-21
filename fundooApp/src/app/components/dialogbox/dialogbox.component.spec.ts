import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { DialogboxComponent } from './dialogbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppMaterialModule } from '../../app.material';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatDialogRef,MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DialogboxComponent', () => {
  let component: DialogboxComponent;
  let fixture: ComponentFixture<DialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogboxComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[MatDialogModule,FormsModule ,RouterTestingModule,ReactiveFormsModule,BrowserAnimationsModule,AppMaterialModule,HttpClientTestingModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
