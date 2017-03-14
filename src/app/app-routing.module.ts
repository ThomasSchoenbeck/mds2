import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthGuard }                from './auth-guard';

//components
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//pages
import { HomeComponent }      from './pages/home/home.component';
import { OverviewComponent }  from './pages/overview/overview.component';
import { ProfileComponent }   from './pages/profile/profile.component';
import { ProjectsComponent }  from './pages/projects/projects.component';
import { RegisterComponent }  from './pages/register/register.component';

const appRoutes: Routes = [
  { path: 'home',     component: HomeComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile',  component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}