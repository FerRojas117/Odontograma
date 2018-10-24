import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { HojadeTrat } from '../modelos/hojadetratamiento.model';

@Injectable({ providedIn: 'root' })
export class HojadeTratService {
  private hojadeTrat: HojadeTrat[] = [];
  private id: string;

  constructor(private http: HttpClient) {}

  addHojadeTrat(
    noempleado	:	string	,
      organodental	:	string	,
      diagnostico	:	string	,
      tratamiento	:	string	,
      costo	:	string	,
      nopoliza	:	string	,
      paciente	:	string	,
      alumno	:	string	,
      profesorresponsable  	:	string	,


    ) {
    const registrarHojadeTrat: any = {
      noempleado	:	noempleado	,
      organodental	:	      organodental	,
      diagnostico	:	      diagnostico	,
      tratamiento	:	      tratamiento	,
      costo	:	      costo	,
      nopoliza	:	      nopoliza	,
      paciente	:	      paciente	,
      alumno	:	      alumno	,
      profesorresponsable  	:	      profesorresponsable  	,

    };
   // imprimir objeto con los datos del front end
   console.log(registrarHojadeTrat);
   /*
   this.http
     .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
     .subscribe(responseData => {
       this.id = responseData._id;
     });
     */
 }

}
