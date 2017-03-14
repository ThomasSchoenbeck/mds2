import { Component }  from '@angular/core';
import { Router }     from "@angular/router";

import { AuthService }    from '../../services/auth.service';
import { LoginService }   from "../../services/login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public error: any;

  constructor(public loginService: LoginService, public authService: AuthService, private router: Router) {}

  // loginWithGoogle() {
  //   this.loginService.loginWithGoogle().then((data) => {
  //     // Send them to the homepage if they are logged in
  //     // this.loginService.addUserInfo();
  //     this.router.navigate(['']);
  //   })
  // }

  loginWithEmail(event, email, password){
    event.preventDefault();
    this.loginService.loginWithEmail(email, password).then(() => {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
      // Redirect the user
      // this.router.navigate(['']);
      this.router.navigate([redirect]);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }

  // constructor(public authService: AuthService, public router: Router) { }

  // login() {
  //   this.authService.login().subscribe(() => {
  //     if (this.authService.isLoggedIn) {
  //       // Get the redirect URL from our auth service
  //       // If no redirect has been set, use the default
  //       let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
  //       // Redirect the user
  //       this.router.navigate([redirect]);
  //     }
  //   });
  // }

  // logout() {
  //   this.authService.logout();
  // }

}
