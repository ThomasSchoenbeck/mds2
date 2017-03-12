import { Component }  from '@angular/core';
import { Router }     from "@angular/router";

import { LoginService } from "../../services/login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public error: any;

  constructor(public loginService: LoginService, private router: Router) {}

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
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }

}
