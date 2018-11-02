import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { HojadeTrat } from '../modelos/hojadetratamiento.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog


@Injectable({ providedIn: 'root' })
export class HojadeTratService {
  private ident: HojadeTrat[] = [];
  id;
  hojadetrat: HojadeTrat;
  constructor(private http: HttpClient,
    private dialog: MatDialog) {}

  addHojadeTrat(
    noempleado	:	string	,
      organodental	:	string	,
      diagnostico	:	string	,
      tratamiento	:	string	,
      costo	:	string	,
      nopoliza	:	string	,
      pacienteh	:	string	,
      alumno	:	string	,
      profesorresponsable  	:	string	,
      paciente: string,

    ) {
    const registrarHojadeTrat: any = {
      noempleado	:	noempleado	,
      organodental	:	      organodental	,
      diagnostico	:	      diagnostico	,
      tratamiento	:	      tratamiento	,
      costo	:	      costo	,
      nopoliza	:	      nopoliza	,
      pacienteh	:	      pacienteh	,
      alumno	:	      alumno	,
      profesorresponsable  	:	      profesorresponsable  	,
      paciente	:	      paciente	,
    };
    console.log(registrarHojadeTrat);
    this.http
      .post<{ _id: string }>('http://localhost:3000/api/hojadeTrat', registrarHojadeTrat)
      .subscribe(responseData => {
        this.id = responseData._id;
      });
  }

// ROUTER GET
  getHojadeTrat(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
      noempleado	:string;
      organodental	:string;
      diagnostico	:string;
      tratamiento	:string;
      costo	:string;
      nopoliza	:string;
      pacienteh	:string;
      alumno	:string;
      profesorresponsable	:string;      
      paciente: string;
    }>('http://localhost:3000/api/exploFisica/' + id);
  }

/// añadir tambien ca componente
  updateHojadeTrat(
    id: string,
    noempleado	:string,
    organodental	:string,
    diagnostico	:string,
    tratamiento	:string,
    costo	:string,
    nopoliza	:string,
    pacienteh	:string,
    alumno	:string,
    profesorresponsable	:string,    
    paciente: string,
  ) {
    let hojadetrat: HojadeTrat;
    hojadetrat = {
      id: id,
      noempleado	:	noempleado	,
      organodental	:	organodental	,
      diagnostico	:	diagnostico	,
      tratamiento	:	tratamiento	,
      costo	:	costo	,
      nopoliza	:	nopoliza	,
      pacienteh	:	paciente	,
      alumno	:	alumno	,
      profesorresponsable	:	profesorresponsable	,      
      paciente: paciente
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/hojadeTrat/' + id, hojadetrat)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
