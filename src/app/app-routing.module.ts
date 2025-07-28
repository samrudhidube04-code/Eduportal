import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetpassComponent } from './Components/forgetpass/forgetpass.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ExploreCoursesComponent } from './Components/explore-courses/explore-courses.component';
import { authGuard } from './Components/Auth/auth-guard.guard';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "service", component: ServicesComponent },
  { path: "contact", component: ContactComponent },
  { path: "explore", component: ExploreCoursesComponent },
  { path: "login", component: LoginComponent, },
  { path: 'register', component: RegisterComponent },
  { path: "forgetpass", component: ForgetpassComponent },
  { path: 'admin', loadChildren: () => import('./Components/admin/admin.module').then(m => m.AdminModule), canActivate: [authGuard], data: { role: 'admin' }, },
  { path: 'user', loadChildren: () => import('./Components/user/user.module').then(m => m.UserModule), canActivate: [authGuard], data: { role: 'user' } },
  { path: '**', redirectTo: 'login' },

  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
