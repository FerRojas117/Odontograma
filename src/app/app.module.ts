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
<<<<<<< HEAD
  MatSelectModule
=======
  MatDialogModule,
  MatDatepickerModule,
<<<<<<< HEAD
  MatNativeDateModule
>>>>>>> 76888f0db70bdce5e83145007c3a14db2a340eac
=======
  MatNativeDateModule,
  MatIconModule,
  MatTooltipModule
>>>>>>> 14a8cc1d10977f94d0970bedd70b1f6f60ec41c1
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
import { IdentificacionComponent, DialogAssignSelfComponent } from './identificacion/identificacion.component';
import { DienteComponent } from './diente/diente.component';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { CompletoComponent } from './completo/completo.component';
import { RevisarComponent } from './revisarHistorial/revisar.component';
import { ExploracionFisicaComponent } from './exploracionfisica/exploracionfisica.component';


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
    DienteComponent,
    ErrorComponent,
    DialogAssignSelfComponent,
    CompletoComponent,
    RevisarComponent,
    ExploracionFisicaComponent
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
<<<<<<< HEAD
    MatSelectModule
=======
    MatDialogModule,
    MatDatepickerModule,
<<<<<<< HEAD
    MatNativeDateModule
>>>>>>> 76888f0db70bdce5e83145007c3a14db2a340eac
=======
    MatNativeDateModule,
    MatIconModule,
    MatTooltipModule
>>>>>>> 14a8cc1d10977f94d0970bedd70b1f6f60ec41c1
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ErrorComponent,
    DialogAssignSelfComponent,
    CompletoComponent
  ]
})
export class AppModule {}
