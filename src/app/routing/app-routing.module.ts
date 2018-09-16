import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { LoginComponent } from './../components/login/login.component';
import { SignupComponent } from './../components/signup/signup.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'',redirectTo:'home.html',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'signup',component:SignupComponent},
  { path:'login',component:LoginComponent},
  //{ path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
