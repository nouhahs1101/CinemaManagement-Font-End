import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppComponent } from './app.component';


import { LoginComponent } from 'src/app/cinemaPr/login/login.component';

import { MatSnackBarModule, MatCardModule } from "@angular/material";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SidebarComponent } from './sidebar/sidebar.component';

import {  LOCALE_ID } from '@angular/core';
import { registerLocaleData, DatePipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MatPaginatorModule} from '@angular/material/paginator';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {  MatSortModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import { AuthenticationService } from './services/authentication.service';

import { CinemaComponent } from 'src/app/cinemaPr/cinema/cinema.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
 
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,

  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,

  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { FormCinemaComponent } from 'src/app/cinemaPr/form-cinema/form-cinema.component';
import { SalleComponent } from 'src/app/cinemaPr/salle/salle.component';
import { FormSalleComponent } from 'src/app/cinemaPr/form-salle/form-salle.component';
import { CinemasComponent } from 'src/app/cinemaPr/cinemas/cinemas.component';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    SidebarComponent,
  
    JwPaginationComponent,
    
    CinemaComponent,
    FormCinemaComponent,
    SalleComponent,
    FormSalleComponent,
    CinemasComponent
    
  ],
  imports: [
    PerfectScrollbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,


  ],
  bootstrap: [
    AppComponent
  ],
  providers: [ 
   DatePipe,
   AuthenticationService]

 
})
export class AppModule { }
