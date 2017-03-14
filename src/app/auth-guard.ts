import { Injectable } from '@angular/core';

import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AuthService }      from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  private isLoggedIn: Subject<boolean> = new Subject<boolean>();
  // private isLoggedIn: boolean;
  
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.subscribe( data => {
      this.isLoggedIn.next(data);
      // this.isLoggedIn = data;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');
    // return true;
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {

    let loggedIn;

    this.isLoggedIn.subscribe( (value) => {
      loggedIn = value;
      console.log(`AuthGuard: checkLogin(): this.authService.isLoggedIn = ${value}`);
      if (loggedIn) { console.log(`returned true`); return true; }
    });


    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }

}
