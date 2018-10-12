import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { HojadeTrat } from '../modelos/hojadetratamiento.model';

@Injectable({ providedIn: 'root' })
export class HojadeTratService {
  private hojadeTrat: HojadeTrat[] = [];

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
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarHojadeTrat)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
