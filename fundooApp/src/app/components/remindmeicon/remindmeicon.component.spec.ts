import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindmeiconComponent } from './remindmeicon.component';

describe('RemindmeiconComponent', () => {
  let component: RemindmeiconComponent;
  let fixture: ComponentFixture<RemindmeiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindmeiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindmeiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
