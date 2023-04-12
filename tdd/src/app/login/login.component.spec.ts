import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const authServiceStub: jasmine.SpyObj<AuthService> = jasmine.createSpyObj(
    'authService',
    ['login']
  );
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule,CommonModule,BrowserModule,ReactiveFormsModule],
    })
      .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form with email and password inputs', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#email')).toBeTruthy();
    expect(element.querySelector('#password')).toBeTruthy();
    expect(element.querySelector('button')).toBeTruthy();
  });

  it('should return model invalid when form is empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate email input as required', () => {
    const email = component.loginForm.controls.email;
    expect(email.valid).toBeFalsy();
    expect(email.errors?.required).toBeTruthy();
  });

  it('should validate password input as required', () => {
    const password = component.loginForm.controls.email;
    expect(password.valid).toBeFalsy();
    expect(password.errors?.required).toBeTruthy();
  });

  it('should validate email format correctly', () => {
    const email = component.loginForm.controls.email;
    email.setValue('test@test.com');
    const errors = email.errors || {};
    expect(email?.valid).toBeTruthy();
    expect(errors?.required).toBeFalsy();
    expect(errors?.pattern).toBeFalsy(); 
   });



  it('should render email validation message when formControl is submitted and invalid', () => {
    const elements: HTMLElement = fixture.nativeElement;
    expect(elements.querySelector('#email-invalid')).toBeFalsy();

    elements.querySelector('button')?.click();

    fixture.detectChanges();
    expect(elements.querySelector('#email-invalid')).toBeTruthy();
    expect(elements.querySelector('#email-invalid')?.textContent).toContain(
      'Please enter a valid email.'
    );
  });

  it('should render password validation message when formControl is submitted and invalid', () => {
    const elements: HTMLElement = fixture.nativeElement;
    expect(elements.querySelector('#password-invalid')).toBeFalsy();

    elements.querySelector('button')?.click();

    fixture.detectChanges();
    expect(elements.querySelector('#password-invalid')).toBeTruthy();
    expect(elements.querySelector('#password-invalid')?.textContent).toContain(
      'Please enter a valid password.'
    );
  });


  it('should invoke auth service when form is valid', () => {
    const email = component.loginForm.controls.email;
    email.setValue('test@test.com');
    const password = component.loginForm.controls.password;
    password.setValue('123456');
    authServiceStub.login.and.returnValue(of());

    fixture.nativeElement.querySelector('button').click();

    expect(authServiceStub.login.calls.any()).toBeFalsy();
    expect(authServiceStub.login).toHaveBeenCalledWith(
      email.value ,
      password.value
    );
  });

});
