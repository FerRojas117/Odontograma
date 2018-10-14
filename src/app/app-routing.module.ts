import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { SidenavFixedComponent } from './Sidenav/sidenav.component';
import { InicioComponent } from './inicio/inicio.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { AntgeneralesComponent } from './antecendetesganerales/antgenerales.component';
import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { EstudiosocioComponent } from './estudiosocieconomico/estudiosocio.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'sidenav',
     component: SidenavFixedComponent,
     children: [
       { path: 'identificacion', component: IdentificacionComponent },
       { path: 'antGenerales', component: AntgeneralesComponent },
       { path: 'antcedentes', component: AntecedentesComponent },
       { path: 'estudiosocio', component: EstudiosocioComponent }
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
