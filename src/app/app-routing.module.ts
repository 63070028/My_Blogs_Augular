import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'home'},
  { path: 'home', component: HomePageComponent },
  { path: 'signup', component: SignupPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
