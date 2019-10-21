import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { ColorsiconComponent } from './colorsicon.component';
import { MatMenuModule} from '@angular/material/menu';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {DataService} from '../../services/data.services/data.service';

describe('ColorsiconComponent', () => {
  let component: ColorsiconComponent;
  let fixture: ComponentFixture<ColorsiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsiconComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports:[MatMenuModule,HttpClientTestingModule],
      providers: [DataService]

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
  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
   });

});
