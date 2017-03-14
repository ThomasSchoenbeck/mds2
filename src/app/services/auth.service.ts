import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { LoginService } from './login.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

// import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn: Subject<boolean> = new Subject<boolean>();
  private userDidLogout: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public loginService: LoginService, private router: Router) {
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.loginService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.isLoggedIn.next(false);
          if (this.userDidLogout) {
            console.log(`user logged out, will be send back to root route`);
            this.userDidLogout = !this.userDidLogout;
            this.router.navigate(['']);
          }
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
          this.isLoggedIn.next(true);
          // this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.isLoggedIn.next(false);
    this.userDidLogout = !this.userDidLogout;
    this.loginService.logout();
  }

  getLoginStatus(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
}