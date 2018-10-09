import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { SidenavFixedComponent } from './Sidenav/sidenav.component';
import { InicioComponent } from './inicio/inicio.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { DiagnosticopulparComponent } from './diagnosticopulpar/diagnosticopulpar.component';
import { ConsentimientoComponent } from './consentimiento/consentimiento.component';
import { PlandetratamientoComponent } from './plandetratamiento/plandetratamiento.component';
import { HojadetratamientoComponent } from './hojadetratamiento/hojadetratamiento.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'sidenav',
     component: SidenavFixedComponent,
     children: [
       { path: 'identificacion', component: IdentificacionComponent },
       { path: 'diagnosticopulpar', component: DiagnosticopulparComponent },
       { path: 'consentimiento', component: ConsentimientoComponent },
       { path: 'plandetratamiento', component: PlandetratamientoComponent },
       { path: 'hojadetratamiento', component: HojadetratamientoComponent },
      ]
  },
  { path: 'inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
