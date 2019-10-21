import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {NotesService} from '../../services/notes.services/notes.service';

import { ChangeUserImageComponent } from './change-user-image.component';

describe('ChangeUserImageComponent', () => {
  let component: ChangeUserImageComponent;
  let fixture: ComponentFixture<ChangeUserImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUserImageComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: MatDialogRef, useValue: {}},NotesService
      ],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUserImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should be created', () => {
    const service: NotesService = TestBed.get(NotesService);
    expect(service).toBeTruthy();
   });
});
