import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  public error: any;
	//registers the user and logs them in
  register(event, name, email, password) {
    event.preventDefault();
    this.loginService.registerUser(email, password).then((user) => {
      this.loginService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.router.navigate(['']);
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }

}
