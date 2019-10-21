import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { IcontrayComponent } from './icontray.component';

describe('IcontrayComponent', () => {
  let component: IcontrayComponent;
  let fixture: ComponentFixture<IcontrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcontrayComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcontrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
