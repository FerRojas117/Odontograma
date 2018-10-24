import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlandeTratamiento } from '../modelos/plandetratamiento.model';


@Injectable({ providedIn: 'root' })
export class PlandetratService {
  private plandeTratamiento: PlandeTratamiento[] = [];
  private id: string;

  constructor(private http: HttpClient) {}

  addPlandeTratamiento(
    trabajo: string,
    fechaTrab: string,
    profesor: string,
    cariadas: string,
    perdidas: string,
    obturadas: string,
    extracciones: string,
    indicadas: string,
    cariadastem:string,
    perdidastem:string,
    obturadastem:string,
    extraccionestem:string,
    indicadastem:string,
    nombre: string,
    cuat: string,
    equipo: string,
    sillon: string,
    cuataux: string,
    equipoaux: string,
    sillonaux: string,
    nombreaux: string,

    ) {
    const registrarPlandeTratamiento: any = {
      trabajo:trabajo,
      fechaTrab:fechaTrab,
      profesor:profesor,
      cariadas:cariadas,
      perdidas:perdidas,
      obturadas:obturadas,
      extracciones:extracciones,
      indicadas:indicadas,
      cariadastem:cariadastem,
      perdidastem:perdidastem,
      obturadastem:obturadastem,
      extraccionestem:extraccionestem,
      indicadastem:indicadastem,
      nombre:nombre,
      cuat:cuat,
      equipo:equipo,
      sillon:sillon,
      nombreaux:nombreaux,
      cuataux:cuataux,
      equipoaux:equipoaux,
      sillonaux:sillonaux,
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
