import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { AntG } from '../modelos/antgenerales.model';

@Injectable({ providedIn: 'root' })
export class AntGService {
  private ident: AntG[] = [];
  private id: string;

  constructor(private http: HttpClient) {}

  addAntG( anthereditarios: string,
      religion: string,
      tiprelsex: string,
      parejas: string,
      calalim: string,
      higpers: string,
      sedentarismo: string,
      calhabit: string,
      perspat: string,
      ginecoobst: string,
      edades: string,
      planifami: string,
      partos	:string,
      fechaParto	:string,
      planifamitiem	:string,
      cuantosParto	:string,
      menarca	:string,
      embarazos	:string,
      bajoPeso	:string,
      edadHijos	:string,
      hijosMacro	:string,
      ritmo	:string,
      regla	:string,
      cesareas	:string,
      vidaSex	:string,
      abortos	:string,

    ) {
    const registrarAntG: any = {
      anthereditarios: anthereditarios,
      religion: religion,
      tiprelsex: tiprelsex,
      parejas: parejas,
      calalim: calalim,
      higpers: higpers,
      sedentarismo: sedentarismo,
      calhabit: calhabit,
      perspat: perspat,
      ginecoobst: ginecoobst,
      edades: edades,
      planifami: planifami,
      partos	:	partos	,
fechaParto	:	fechaParto	,
planifamitiem	:	planifamitiem	,
cuantosParto	:	cuantosParto	,
menarca	:	menarca	,
embarazos	:	embarazos	,
bajoPeso	:	bajoPeso	,
edadHijos	:	edadHijos	,
hijosMacro	:	hijosMacro	,
ritmo	:	ritmo	,
regla	:	regla	,
cesareas	:	cesareas	,
vidaSex	:	vidaSex	,
abortos	:	abortos	,

    };
    // imprimir objeto con los datos del front end
    console.log(registrarAntG);
    /*
    this.http
      .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
      .subscribe(responseData => {
        this.id = responseData._id;
      });
      */
  }

}