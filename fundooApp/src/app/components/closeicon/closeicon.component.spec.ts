import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseiconComponent } from './closeicon.component';

describe('CloseiconComponent', () => {
  let component: CloseiconComponent;
  let fixture: ComponentFixture<CloseiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
