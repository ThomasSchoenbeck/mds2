import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//http://learnangular2.com/forms/
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//components
import { LoginComponent } from './components/login/login.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//pages
import { OverviewComponent }  from './pages/overview/overview.component';
import { ProfileComponent }   from './pages/profile/profile.component';
import { ProjectsComponent }  from './pages/projects/projects.component';
import { RegisterComponent }  from './pages/register/register.component';

//services
import { AuthGuard }    from './auth-guard';
import { AuthService }  from './services/auth.service';
import { LoginService } from './services/login.service';
import { ProjectService } from './services/project.service';

// Must export or import the config
import { firebaseConfig } from './firebase.config';
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LoginComponent,
    OverviewComponent,
    ProfileComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService, LoginService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
