import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { SidenavFixedComponent } from './Sidenav/sidenav.component';
import { InicioComponent } from './inicio/inicio.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { InterrogatorioComponent } from './interrogatorio/interrogatorio.component';
import { Est_laboratorio_gabineteComponent } from './est_laboratorio_gabinete/est_laboratorio_gabinete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'sidenav',
     component: SidenavFixedComponent,
     children: [
       { path: 'identificacion', component: IdentificacionComponent },
       { path: 'interrogatorio', component: InterrogatorioComponent },
       { path: 'est_laboratorio_gabinete', component: Est_laboratorio_gabineteComponent},
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
