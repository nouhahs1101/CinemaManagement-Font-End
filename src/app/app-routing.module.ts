import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/cinemaPr/login/login.component';
 
import { SidebarComponent } from './sidebar/sidebar.component';

import { AppComponent } from './app.component';

import { CinemaComponent } from 'src/app/cinemaPr/cinema/cinema.component';
import { FormCinemaComponent } from 'src/app/cinemaPr/form-cinema/form-cinema.component';
import { SalleComponent } from 'src/app/cinemaPr/salle/salle.component';
import { FormSalleComponent } from 'src/app/cinemaPr/form-salle/form-salle.component';
import { CinemasComponent } from 'src/app/cinemaPr/cinemas/cinemas.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'cinemaRabat',
    pathMatch: 'full'
  },
  {
    path: 'cinem-rabat',
    component: CinemaComponent
  },
  { path: 'login', component: LoginComponent }, 
  { path: 'cinemaRabat', component: CinemaComponent },
  { path: 'formCinema', component: FormCinemaComponent },
  { path: 'salle', component: SalleComponent },
  { path: 'formSalle', component: FormSalleComponent },
  { path: 'allCinema', component: CinemasComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'app', component: AppComponent }
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
