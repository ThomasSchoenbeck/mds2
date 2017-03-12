import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//components
import { LoginComponent } from './components/login/login.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//pages
import { RegisterComponent } from './pages/register/register.component';
import { OverviewComponent } from './pages/overview/overview.component';

//services
import { LoginService } from './services/login.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDWzi1fhfsD2S7g1ts3vRoZBOZBPZ0mmWg',
  authDomain: 'mds-2-1c873.firebaseapp.com',
  databaseURL: 'https://mds-2-1c873.firebaseio.com/',
  storageBucket: 'mds-2-1c873.appspot.com',
  messagingSenderId: '967631975860'
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LoginComponent,
    OverviewComponent,
    ProfileComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
