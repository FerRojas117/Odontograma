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
    trumefaccionintra: 	string,
    trumefaccionextra: 	string,
    fistula: 	string,
    reaccionpulparcalor: 	string,
    reaccionpulparfrio: 	string,
    reaccionpulpartestcavit: 	string,
    observaciones: 	string,
    organob: 	string,
    caries: 	string,
    trauma: 	string,
    enfperiodonta: 	string,
    obtdefectuosa: 	string,
    fracturacorona: 	string,
    fracturaraiz: 	string,
    otro: 	string,
    otro2: 	string,
    otro3: 	string,
    organoc: 	string,
    calcificacionescorona2: 	string,
    calcificacionesraiz2: 	string,
    resorcioninterno: 	string,
    resorcionexterno: 	string,
    rarefaccionpenapico: 	string,
    rarefaccionradicular: 	string,
    obturaciondefectuosa2: 	string,
    organodentario: 	string,
    vitalreversible: 	string,
    vitalirreversible: 	string,
    novitalaguda: 	string,
    novitalcronica: 	string,

    ) {
    const registrarDiagnostico: any = {
      organoa: 	organoa  	,
      content: 	     content  	,
      tipodedolor: 	      tipodedolor  	,
      episodios: 	      episodios  	,
      percusion: 	      percusion  	,
      movilidad: 	      movilidad  	,
      cambiodecolor: 	      cambiodecolor  	,
      trumefaccionintra: 	      trumefaccionintra  	,
      trumefaccionextra: 	      trumefaccionextra  	,
      fistula: 	      fistula  	,
      reaccionpulparcalor: 	      reaccionpulparcalor  	,
      reaccionpulparfrio: 	      reaccionpulparfrio  	,
      reacciontestcavit: 	      reaccionpulpartestcavit  	,
      observaciones: 	      observaciones  	,
      organob: 	      organob  	,
      caries: 	      caries  	,
      trauma: 	      trauma  	,
      enfperiodonta: 	      enfperiodonta  	,
      obtdefectuosa: 	      obtdefectuosa  	,
      fracturacorona: 	      fracturacorona  	,
      fracturaraiz: 	      fracturaraiz  	,
      otro: 	      otro  	,
      otro2: 	      otro2  	,
      otro3: 	      otro3  	,
      organoc: 	      organoc  	,
      calcificacionescorona2: 	      calcificacionescorona2  	,
      calcificacionesraiz2: 	      calcificacionesraiz2  	,
      resorcioninterno: 	      resorcioninterno  	,
      resorcionexterno: 	      resorcionexterno  	,
      rarefaccionpenapico: 	      rarefaccionpenapico  	,
      rarefaccionradicular: 	      rarefaccionradicular  	,
      obturaciondefectuosa2: 	      obturaciondefectuosa2  	,
      organodentario: 	      organodentario  	,
      vitalreversible: 	      vitalreversible  	,
      vitalirreversible: 	      vitalirreversible  	,
      novitalaguda: 	      novitalaguda  	,
      novitalcronica: 	      novitalcronica  	,

    };
     // imprimir objeto con los datos del front end
   console.log(registrarDiagnostico);
   /*
   this.http
     .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
     .subscribe(responseData => {
       this.id = responseData._id;
     });
     */
 }

}
