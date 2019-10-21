import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NotesService} from '../../services/notes.services/notes.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ArchiveiconComponent } from './archiveicon.component';

describe('ArchiveiconComponent', () => {
  let component: ArchiveiconComponent;
  let fixture: ComponentFixture<ArchiveiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveiconComponent ],
      imports: [HttpClientTestingModule], 

      providers: [NotesService]

      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveiconComponent);
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
