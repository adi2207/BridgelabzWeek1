import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { AppMaterialModule } from '../../app.material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { TakenoteComponent } from './takenote.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('TakenoteComponent', () => {
  let component: TakenoteComponent;
  let fixture: ComponentFixture<TakenoteComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenoteComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[HttpClientTestingModule,BrowserAnimationsModule,AppMaterialModule,FormsModule ,ReactiveFormsModule],

    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', async() => {
    const fixture = TestBed.createComponent(TakenoteComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
