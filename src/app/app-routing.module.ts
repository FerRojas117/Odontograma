import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { SidenavFixedComponent } from './Sidenav/sidenav.component';
import { InicioComponent } from './inicio/inicio.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
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
import { Faqs } from './faqs/faqs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'exportar', component: Exportar },
  { path: 'faqs', component: Faqs },
  {
    path: 'sidenav',
     component: SidenavFixedComponent,
     children: [
       { path: 'identificacion', component: IdentificacionComponent },
       { path: 'antecedentes', component: AntecedentesComponent },
       { path: 'antecedentesGenerales', component: AntgeneralesComponent },
       { path: 'consentimiento', component: ConsentimientoComponent },
       { path: 'diagnosticopulpar', component: DiagnosticopulparComponent },
       { path: 'estudiosocio', component: EstudiosocioComponent },
       { path: 'exploFisica', component: ExploracionFisicaComponent },
       { path: 'hojadetratamiento', component: HojadetratamientoComponent },
       { path: 'interrogatorio', component: InterrogatorioComponent },
       { path: 'laboratoriogabinete', component: LaboratorioGabineteComponent },
       { path: 'plandetratamiento', component: PlandetratamientoComponent },
       { path: 'rehabilitacion', component: RehabilitacionComponent },
      ],
      canActivate: [AuthGuard]
  },
  {
    path: 'sidenavEdit/:idsId',
     component: SidenavFixedComponent,
     children: [
       { path: 'editId/:id', component: IdentificacionComponent, canActivate: [AuthGuard] },
       { path: 'editExploFisica/:id', component: ExploracionFisicaComponent, canActivate: [AuthGuard] },
       { path: 'editAntecedentes/:id', component: AntecedentesComponent },
       { path: 'editAntecedentesGenerales/:id', component: AntgeneralesComponent },
       { path: 'editConsentimiento/:id', component: ConsentimientoComponent },
       { path: 'editDiagnosticopulpar/:id', component: DiagnosticopulparComponent },
       { path: 'editEstudiosocio/:id', component: EstudiosocioComponent },
       { path: 'editHojadetratamiento/:id', component: HojadetratamientoComponent },
       { path: 'editInterrogatorio/:id', component: InterrogatorioComponent },
       { path: 'editLaboratoriogabinete/:id', component: LaboratorioGabineteComponent },
       { path: 'editPlandetratamiento/:id', component: PlandetratamientoComponent },
       { path: 'editRehabilitacion/:id', component: RehabilitacionComponent },

      ],
      canActivate: [AuthGuard]
  },

  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'revisar', component: RevisarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
