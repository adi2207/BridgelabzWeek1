import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { MatMenuModule} from '@angular/material/menu';

import { MoremenuComponent } from './moremenu.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MoremenuComponent', () => {
  let component: MoremenuComponent;
  let fixture: ComponentFixture<MoremenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoremenuComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports:[MatMenuModule,HttpClientTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoremenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
