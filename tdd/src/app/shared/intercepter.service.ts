import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IntercepterService {
  token:any
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.token = "Bearer" + " " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjczODUxMDEyLCJleHAiOjE2NzU2NTEwMTJ9.fstXzrcilR4yXxL52AyqnpwNCEM6x1CKOGZ_GRqT7eE"
    let modifiedRequest = req.clone({
      headers: req.headers.append("Authorization", this.token),
    });
    console.log((modifiedRequest))
    return next.handle(modifiedRequest);
}
}