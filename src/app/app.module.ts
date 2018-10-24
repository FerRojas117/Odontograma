import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRadioModule,
  MatNativeDateModule,
  MatTabBody,
  MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { HomeComponent } from './home/home.component';
import { SidenavFixedComponent } from './Sidenav/sidenav.component';
import {
  MatListModule,
  MatSidenavModule
 } from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { DiagnosticopulparComponent } from './diagnosticopulpar/diagnosticopulpar.component';
import { PlandetratamientoComponent } from './plandetratamiento/plandetratamiento.component';
import { HojadetratamientoComponent } from './hojadetratamiento/hojadetratamiento.component';
import { ConsentimientoComponent } from './consentimiento/consentimiento.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SidenavFixedComponent,
    InicioComponent,
    IdentificacionComponent,
    DiagnosticopulparComponent,
    PlandetratamientoComponent,
    HojadetratamientoComponent,
    ConsentimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSidenavModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
