import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

//components
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//pages
import { RegisterComponent } from './pages/register/register.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const appRoutes: Routes = [
  { path: 'login',        component: LoginComponent },
  { path: 'register',        component: RegisterComponent },
  { path: 'profile',        component: ProfileComponent },
  { path: 'projects',        component: ProjectsComponent },
  { path: 'overview',        component: OverviewComponent },
  { path: '',   redirectTo: '/overview', pathMatch: 'full' },
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