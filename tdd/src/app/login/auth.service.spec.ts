import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


describe('AuthService', () => {
  let service: AuthService;

    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule,CommonModule,BrowserModule],

    });
    service = TestBed.inject(AuthService);
  });

  it('should perform a post to /auth with email and password', () => {
    const email = 'email';
    const password = 'password';
    const httpClientStub: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj(
      'http',
      ['post']
    );
    const authService = new AuthService(httpClientStub);
    httpClientStub.post.and.returnValue(of());

    authService.login(email, password);

    expect(httpClientStub.post).toHaveBeenCalledWith('/auth', { email, password });
  });
});