import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLoggedIn: boolean;

  constructor(public loginService: LoginService, private router: Router) {
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.loginService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
        else {
          console.log("Successfully Logged in.");
          // Set the Display Name and Email so we can attribute messages to them
          if(auth.google) {
            this.loginService.displayName = auth.google.displayName;
            this.loginService.email = auth.google.email;
          }
          else {
            this.loginService.displayName = auth.auth.email;
            this.loginService.email = auth.auth.email;
          }
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.loginService.logout();
  }

}
