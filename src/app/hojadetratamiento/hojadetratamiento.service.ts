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
    pacienteh	:	string	,
      alumno	:	string	,
      profresponsable :	string	,
      noempleado	:	string	,
      orgdental	:	string	,
      diagnostico	:	string	,
      tratamiento	:	string	,
      costo	:	string	,
      nopoliza	:	string	,
      paciente: string,
    ) {
    const registrarHojadeTrat: any = {
      pacienteh	:	      pacienteh	,
      alumno	:	      alumno	,
      profresponsable  	:	      profresponsable  	,
      noempleado	:	noempleado	,
      orgdental	:	      orgdental	,
      diagnostico	:	      diagnostico	,
      tratamiento	:	      tratamiento	,
      costo	:	      costo	,
      nopoliza	:	      nopoliza	,
      paciente	:	      paciente	,
    };
    console.log(registrarHojadeTrat);
    this.http
      .post<{ message: string }>('http://localhost:3000/api/hojadeTrat', registrarHojadeTrat)
      .subscribe(responseData => {
        this.dialog.open(CompletoComponent, {data: {message:  responseData.message}});
      });
  }

// ROUTER GET
  getHojadeTrat(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
      pacienteh	:string;
      alumno	:string;
      profresponsable	:string;
      noempleado	:string;
      orgdental	:string;
      diagnostico	:string;
      tratamiento	:string;
      costo	:string;
      nopoliza	:string;
      paciente: string;
    }>('http://localhost:3000/api/exploFisica/' + id);
  }

/// añadir tambien ca componente
  updateHojadeTrat(
    id: string,
    pacienteh	:string,
    alumno	:string,
    profresponsable	:string,
    noempleado	:string,
    orgdental	:string,
    diagnostico	:string,
    tratamiento	:string,
    costo	:string,
    nopoliza	:string,

    paciente: string,
  ) {
    let hojadetrat: HojadeTrat;
    hojadetrat = {
      id: id,
      pacienteh	:	paciente	,
      alumno	:	alumno	,
      profresponsable	:	profresponsable	,
      noempleado	:	noempleado	,
      orgdental	:	orgdental	,
      diagnostico	:	diagnostico	,
      tratamiento	:	tratamiento	,
      costo	:	costo	,
      nopoliza	:	nopoliza	,
      paciente: paciente
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/hojadeTrat/' + id, hojadetrat)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
