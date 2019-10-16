import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsiconComponent } from './colorsicon.component';

describe('ColorsiconComponent', () => {
  let component: ColorsiconComponent;
  let fixture: ComponentFixture<ColorsiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
