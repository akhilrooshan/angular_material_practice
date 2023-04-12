import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false
  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
    password: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder, private authService: AuthService) {
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next:res => console.log(res),
        error:error => console.log(error)
    });
    }
  }

}
