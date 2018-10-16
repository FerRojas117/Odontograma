import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlandeTratamiento } from '../modelos/plandetratamiento.model';


@Injectable({ providedIn: 'root' })
export class PlandetratService {
  private plandeTratamiento: PlandeTratamiento[] = [];

  constructor(private http: HttpClient) {}

  addPlandeTratamiento( 
    trabajo: string,
    profesor: string,
    cariadas: string,
    perdidas: string,
    obturadas: string,
    extracciones: string,
    indicadas: string,
    nombre: string,
    cuat: string,
    equipo: string,
    sillon: string,

    ) {
    const registrarPlandeTratamiento: any = {
      trabajo:trabajo,
      profesor:profesor,
      cariadas:cariadas,
      perdidas:perdidas,
      obturadas:obturadas,
      extracciones:extracciones,
      indicadas:indicadas,
      nombre:nombre,
      cuat:cuat,
      equipo:equipo,
      sillon:sillon,
    };
    // imprimir objeto con los datos del front end
   console.log(registrarPlandeTratamiento);
   /*
   this.http
     .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
     .subscribe(responseData => {
       this.id = responseData._id;
     });
     */
 }

}

