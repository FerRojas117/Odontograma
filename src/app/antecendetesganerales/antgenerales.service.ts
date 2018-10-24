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
      planifami: string
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
      planifami: planifami
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