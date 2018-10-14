import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Inte } from '../modelos/interrogatorio.model';
//import { provideRouterInitializer } from '@angular/router/src/router_module';

@Injectable({ providedIn: 'root' })
export class InteService {
  private ident: Inte[] = [];

  constructor(private http: HttpClient) {}

  addInte(
      presionArterial: string,
      fiebreReumatica: string,
      hemorragias: string,
      anemia: string,
      infarto: string,
      otros: string,
      tuberculosis: string,
      neumonia: string,
      asma: string,
      faringeamigdalitis: string,
      bronquitis: string,
      gastritis: string,
      colitis: string,
      gastroenteritis: string,
      hepatitis: string,
      desdeCuando: string,
      diabetes: string,
      haceCuanto: string,
      valorGlucosa: string,
      proRenal: string,
    ) {
    const registrarInte: any = {
        presionArterial: presionArterial,
        fiebreReumatica: fiebreReumatica,
        hemorragias: hemorragias,
        anemia: anemia,
        infarto: infarto,
        otros: otros,
        tuberculosis: tuberculosis,
        neumonia: neumonia,
        asma: asma,
        faringeamigdalitis: faringeamigdalitis,
        bronquitis: bronquitis,
        gastritis: gastritis,
        colitis: colitis,
        gastroenteritis: gastroenteritis,
        hepatitis: hepatitis,
        desdeCuando: desdeCuando,
        diabetes: diabetes,
        haceCuanto: haceCuanto,
        valorGlucosa: valorGlucosa,
        proRenal: proRenal,
    };
    console.log(registrarInte);
    /*this.http
      .post<{ message: string }>('http://localhost:3000/api/inte', registrarInte)
      .subscribe(responseData => {
        console.log(responseData);
      });*/
  }

}
