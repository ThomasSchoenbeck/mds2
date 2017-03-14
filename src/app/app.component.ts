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

  constructor() { }

}
