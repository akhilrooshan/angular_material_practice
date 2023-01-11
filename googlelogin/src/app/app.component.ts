import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'googlelogin';
  user:any;
  loggedIn:any;
  constructor(private authService:SocialAuthService){
  }
  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user=user
      this.loggedIn=(user !=null)
      console.log(user)
    })
  }
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
  // signOut(): void {
  //   this.authService.signOut();
  // }
}
