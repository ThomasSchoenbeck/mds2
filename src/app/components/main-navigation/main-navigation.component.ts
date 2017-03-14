import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  private isLoggedIn: boolean;
  private userMenuOpened: boolean = false;

  private userFirstName = 'Thomas';
  private userLastName = 'Good';

  constructor(private authService: AuthService) { }

  ngOnInit() {

    console.log(`MainNavigationComponent: this.isLoggedIn = ${this.isLoggedIn}`);
    this.authService.getLoginStatus().subscribe( data => {
      this.isLoggedIn = data;
      console.log(`MainNavigationComponent: isLoggedIn = ${this.isLoggedIn}`);
    });
  }

  openUserMenu() {
    this.userMenuOpened = !this.userMenuOpened;
  }

  logout() {
    this.openUserMenu();
    this.authService.logout();
  }

}
