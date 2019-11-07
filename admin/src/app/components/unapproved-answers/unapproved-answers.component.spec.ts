import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedAnswersComponent } from './unapproved-answers.component';

describe('UnapprovedAnswersComponent', () => {
  let component: UnapprovedAnswersComponent;
  let fixture: ComponentFixture<UnapprovedAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovedAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
