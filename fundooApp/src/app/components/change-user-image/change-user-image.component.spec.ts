import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserImageComponent } from './change-user-image.component';

describe('ChangeUserImageComponent', () => {
  let component: ChangeUserImageComponent;
  let fixture: ComponentFixture<ChangeUserImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUserImageComponent ]
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
});
