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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
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
       { path: 'antecedentes', component: AntecedentesComponent },
       { path: 'antecedentesGenerales', component: AntgeneralesComponent },
       { path: 'consentimiento', component: ConsentimientoComponent },
       { path: 'diagnosticopulpar', component: DiagnosticopulparComponent },
       { path: 'estudiosocio', component: EstudiosocioComponent },
       { path: 'hojadetratamiento', component: HojadetratamientoComponent },
       { path: 'interrogatorio', component: InterrogatorioComponent },
       { path: 'laboratoriogabinete', component: LaboratorioGabineteComponent },
       { path: 'plandetratamiento', component: PlandetratamientoComponent },
       { path: 'rehabilitacion', component: RehabilitacionComponent },

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
