import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  login(email: any, password: any): Observable<string> {
    return this.httpClient.post<string>('/auth', {
      email,
      password
    });
  }

}
