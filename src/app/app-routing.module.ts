import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'home'},
  { path: 'home', component: HomePageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'blog', component: BlogPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
