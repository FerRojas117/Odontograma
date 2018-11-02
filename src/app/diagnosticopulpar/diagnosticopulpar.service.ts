import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Diagnostico } from '../modelos/diagnostico.model';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog


@Injectable({ providedIn: 'root' })
export class DiagnosticoService {
  private ident: Diagnostico[] = [];
  id;
  diagnostico: Diagnostico;
  constructor(private http: HttpClient,
    private dialog: MatDialog) {}

  addDiagnostico( organoa: 	string,
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
    paciente: string,
    ) {
    const registrarDiagnostico: any = {
      organoa: 	organoa  	,
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
      paciente: paciente
    };
    console.log(registrarDiagnostico);
    this.http
      .post<{ _id: string }>('http://localhost:3000/api/diagnostico', registrarDiagnostico)
      .subscribe(responseData => {
        this.id = responseData._id;
      });
  }
  // ROUTER GET
  getDiagnostico(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
      organoa:	string;
      tipodedolor:	string;
      episodios:	string;
      percusion:	string;
      movilidad:	string;
      cambiodecolor:	string;
      trumefaccionintra:	string;
      trumefaccionextra:	string;
      fistula:	string;
      reaccionpulparcalor:	string;
      reaccionpulparfrio:	string;
      reacciontestcavit:	string;
      observaciones:	string;
      organob:	string;
      caries:	string;
      trauma:	string;
      enfperiodonta:	string;
      obtdefectuosa:	string;
      fracturacorona:	string;
      fracturaraiz:	string;
      otro:	string;
      otro2:	string;
      otro3:	string;
      organoc:	string;
      calcificacionescorona2:	string;
      calcificacionesraiz2:	string;
      resorcioninterno:	string;
      resorcionexterno:	string;
      rarefaccionpenapico:	string;
      rarefaccionradicular:	string;
      obturaciondefectuosa2:	string;
      organodentario:	string;
      vitalreversible:	string;
      vitalirreversible:	string;
      novitalaguda:	string;
      novitalcronica:	string;      
      paciente: string;
    }>('http://localhost:3000/api/diagnostico/' + id);
  }

/// añadir tambien ca componente
  updateDiagnostico(
    id: string,
    organoa:	string,
tipodedolor:	string,
episodios:	string,
percusion:	string,
movilidad:	string,
cambiodecolor:	string,
trumefaccionintra:	string,
trumefaccionextra:	string,
fistula:	string,
reaccionpulparcalor:	string,
reaccionpulparfrio:	string,
reacciontestcavit:	string,
observaciones:	string,
organob:	string,
caries:	string,
trauma:	string,
enfperiodonta:	string,
obtdefectuosa:	string,
fracturacorona:	string,
fracturaraiz:	string,
otro:	string,
otro2:	string,
otro3:	string,
organoc:	string,
calcificacionescorona2:	string,
calcificacionesraiz2:	string,
resorcioninterno:	string,
resorcionexterno:	string,
rarefaccionpenapico:	string,
rarefaccionradicular:	string,
obturaciondefectuosa2:	string,
organodentario:	string,
vitalreversible:	string,
vitalirreversible:	string,
novitalaguda:	string,
novitalcronica:	string,
paciente: string,
  ) {
    let diagnostico: Diagnostico;
    diagnostico = {
      id: id,
      organoa:			organoa	,
tipodedolor:			tipodedolor	,
episodios:			episodios	,
percusion:			percusion	,
movilidad:			movilidad	,
cambiodecolor:			cambiodecolor	,
trumefaccionintra:	trumefaccionintra	,
trumefaccionextra:			trumefaccionextra	,
fistula:			fistula	,
reaccionpulparcalor:			reaccionpulparcalor	,
reaccionpulparfrio:			reaccionpulparfrio	,
reacciontestcavit:			reacciontestcavit	,
observaciones:			observaciones	,
organob:			organob	,
caries:			caries	,
trauma:			trauma	,
enfperiodonta:			enfperiodonta	,
obtdefectuosa:			obtdefectuosa	,
fracturacorona:			fracturacorona	,
fracturaraiz:			fracturaraiz	,
otro:			otro	,
otro2:			otro2	,
otro3:			otro3	,
organoc:			organoc	,
calcificacionescorona2:			calcificacionescorona2	,
calcificacionesraiz2:			calcificacionesraiz2	,
resorcioninterno:			resorcioninterno	,
resorcionexterno:			resorcionexterno	,
rarefaccionpenapico:			rarefaccionpenapico	,
rarefaccionradicular:			rarefaccionradicular	,
obturaciondefectuosa2:			obturaciondefectuosa2	,
organodentario:			organodentario	,
vitalreversible:			vitalreversible	,
vitalirreversible:			vitalirreversible	,
novitalaguda:			novitalaguda	,
novitalcronica:			novitalcronica	,

      paciente: paciente
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/diagnostico/' + id, diagnostico)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
