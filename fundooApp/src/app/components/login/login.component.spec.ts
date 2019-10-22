import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
function setEmailValidValue(){
  return this.component.email.value='aditipal96@gmail.com';
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents()
  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should be a valid email', () => {
      component.email.setValue('ghifd@fmail.com')
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      expect(component.email.value).toMatch(re);
    });
  
     it('password must be 6 digits long', () => {
      component.password.setValue('ghifcom')
      expect(component.password.value.length).toBeGreaterThanOrEqual(6);
     });
    it('email cant be empty', async() => {
      component.email.setValue('')
      expect(component.email.valid).toBeFalsy();
    });

       it('password cant be blank', async() => {
        component.password.setValue('')
       expect(component.password.valid).toBeFalsy();
      });
      it('should be a valid email', () => {
        expect(component.onLogin()).toBeTruthy();
      });
});
