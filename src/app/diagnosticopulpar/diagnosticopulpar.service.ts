import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Diagnostico } from '../modelos/diagnostico.model';

@Injectable({ providedIn: 'root' })
export class DiagnosticoService {
  private diagnostico: Diagnostico[] = [];

  constructor(private http: HttpClient) {}

  addDiagnostico( organoa: 	string,
    content: 	string,
    tipodedolor: 	string,
    episodios: 	string,
    percusion: 	string,
    movilidad: 	string,
    cambiodecolor: 	string,
    trumetaccion: 	string,
    intra: 	string,
    extra: 	string,
    fisura: 	string,
    reaccionpulpar: 	string,
    testcavit: 	string,
    observaciones: 	string,
    organob: 	string,
    caries: 	string,
    trauma: 	string,
    enfperiodonta: 	string,
    obtdefectuosa: 	string,
    fractura: 	string,
    corona: 	string,
    raiz: 	string,
    otro: 	string,
    otro2: 	string,
    otro3: 	string,
    organoc: 	string,
    calcificaciones: 	string,
    corona2: 	string,
    raiz2: 	string,
    resorcion: 	string,
    interno: 	string,
    externo: 	string,
    refacciones: 	string,
    penapico: 	string,
    radicular: 	string,
    obturaciondefectuosa2: 	string,
    organodentario: 	string,
    vital: 	string,
    reversible: 	string,
    irreversible: 	string,
    novital: 	string,
    aguda: 	string,
    cronica: 	string,

    ) {
    const registrarDiagnostico: any = {
      organoa: 	organoa  	,
      content: 	     content  	,
      tipodedolor: 	      tipodedolor  	,
      episodios: 	      episodios  	,
      percusion: 	      percusion  	,
      movilidad: 	      movilidad  	,
      cambiodecolor: 	      cambiodecolor  	,
      trumetaccion: 	      trumetaccion  	,
      intra: 	      intra  	,
      extra: 	      extra  	,
      fisura: 	      fisura  	,
      reaccionpulpar: 	      reaccionpulpar  	,
      testcavit: 	      testcavit  	,
      observaciones: 	      observaciones  	,
      organob: 	      organob  	,
      caries: 	      caries  	,
      trauma: 	      trauma  	,
      enfperiodonta: 	      enfperiodonta  	,
      obtdefectuosa: 	      obtdefectuosa  	,
      fractura: 	      fractura  	,
      corona: 	      corona  	,
      raiz: 	      raiz  	,
      otro: 	      otro  	,
      otro2: 	      otro2  	,
      otro3: 	      otro3  	,
      organoc: 	      organoc  	,
      calcificaciones: 	      calcificaciones  	,
      corona2: 	      corona2  	,
      raiz2: 	      raiz2  	,
      resorcion: 	      resorcion  	,
      interno: 	      interno  	,
      externo: 	      externo  	,
      refacciones: 	      refacciones  	,
      penapico: 	      penapico  	,
      radicular: 	      radicular  	,
      obturaciondefectuosa2: 	      obturaciondefectuosa2  	,
      organodentario: 	      organodentario  	,
      vital: 	      vital  	,
      reversible: 	      reversible  	,
      irreversible: 	      irreversible  	,
      novital: 	      novital  	,
      aguda: 	      aguda  	,
      cronica: 	      cronica  	,

    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarDiagnostico)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
