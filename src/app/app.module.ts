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
  MatSelectModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatTooltipModule,
  MatGridListModule
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
import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { AntgeneralesComponent } from './antecendetesganerales/antgenerales.component';
import { ConsentimientoComponent } from './consentimiento/consentimiento.component';
import { DiagnosticopulparComponent } from './diagnosticopulpar/diagnosticopulpar.component';
import { EstudiosocioComponent } from './estudiosocieconomico/estudiosocio.component';
import { HojadetratamientoComponent } from './hojadetratamiento/hojadetratamiento.component';
import { InterrogatorioComponent } from './interrogatorio/interrogatorio.component';
import { LaboratorioGabineteComponent } from './laboratoriogabinete/laboratoriogabinete.component';
import { PlandetratamientoComponent } from './plandetratamiento/plandetratamiento.component';
import { RehabilitacionComponent } from './rehabilitacion/rehabilitacion.component';
import { Exportar } from './exportar/exportar.component';

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
    ExploracionFisicaComponent,
    AntecedentesComponent,
    AntgeneralesComponent,
    ConsentimientoComponent,
    DiagnosticopulparComponent,
    EstudiosocioComponent,
    HojadetratamientoComponent,
    InterrogatorioComponent,
    LaboratorioGabineteComponent,
    PlandetratamientoComponent,
    RehabilitacionComponent,
    Exportar

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
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatNativeDateModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatGridListModule,
    
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
