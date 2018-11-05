import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlandeTratamiento } from '../modelos/plandetratamiento.model';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Explo } from '../modelos/exploracionfisica.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog


@Injectable({ providedIn: 'root' })
export class PlandetratService {
  private ident: PlandeTratamiento[] = [];
  id;
  plandeTratamiento: PlandeTratamiento;

  constructor(private http: HttpClient,
    private dialog: MatDialog) {}

  addPlandeTratamiento(
    odontograma: string[],
    trabajo	:string,
    fechaTrab	:string,
    profesor	:string,
    cariadas	:string,
    perdidas	:string,
    obturadas	:string,
    extracciones	:string,
    indicadas	:string,
    cariadastem	:string,
    perdidastem	:string,
    obturadastem	:string,
    extraccionestem	:string,
    indicadastem	:string,
    nombre	:string,
    cuat	:string,
    equipo	:string,
    sillon	:string,
    nombreaux	:string,
    cuataux	:string,
    equipoaux	:string,
    sillonaux	:string,
    paciente: string,
    ) {
    const registrarPlandeTratamiento: any = {
      odontograma: odontograma,
      trabajo	:	trabajo	,
      fechaTrab	:	fechaTrab	,
      profesor	:	profesor	,
      cariadas	:	cariadas	,
      perdidas	:	perdidas	,
      obturadas	:	obturadas	,
      extracciones	:	extracciones	,
      indicadas	:	indicadas	,
      cariadastem	:	cariadastem	,
      perdidastem	:	perdidastem	,
      obturadastem	:	obturadastem	,
      extraccionestem	:	extraccionestem	,
      indicadastem	:	indicadastem	,
      nombre	:	nombre	,
      cuat	:	cuat	,
      equipo	:	equipo	,
      sillon	:	sillon	,
      nombreaux	:	nombreaux	,
      cuataux	:	cuataux	,
      equipoaux	:	equipoaux	,
      sillonaux	:	sillonaux	,
      paciente: paciente
    };
    // imprimir objeto con los datos del front end
   console.log(registrarPlandeTratamiento);
   this.http
   .post<{ message: string }>('http://localhost:3000/api/plandeTratamiento', registrarPlandeTratamiento)
   .subscribe(responseData => {
    this.dialog.open(CompletoComponent, {data: {message:  responseData.message}});
   });
}

// ROUTER GET
getPlandeTratamiento(id: string) {
 console.log(id);
 return this.http.get<{
   _id: string;
   odont: string[];
   trabajo	:string;
fechaTrab	:string;
profesor	:string;
cariadas	:string;
perdidas	:string;
obturadas	:string;
extracciones	:string;
indicadas	:string;
cariadastem	:string;
perdidastem	:string;
obturadastem	:string;
extraccionestem	:string;
indicadastem	:string;
nombre	:string;
cuat	:string;
equipo	:string;
sillon	:string;
nombreaux	:string;
cuataux	:string;
equipoaux	:string;
sillonaux	:string;
   paciente: string;
 }>('http://localhost:3000/api/plandeTratamiento/' + id);
}

/// añadir tambien ca componente
updatePlandeTratamiento(
  id: string,
  odont: string[],
  trabajo	:string,
  fechaTrab	:string,
  profesor	:string,
  cariadas	:string,
  perdidas	:string,
  obturadas	:string,
  extracciones	:string,
  indicadas	:string,
  cariadastem	:string,
  perdidastem	:string,
  obturadastem	:string,
  extraccionestem	:string,
  indicadastem	:string,
  nombre	:string,
  cuat	:string,
  equipo	:string,
  sillon	:string,
  nombreaux	:string,
  cuataux	:string,
  equipoaux	:string,
  sillonaux	:string,

  paciente: string,
) {
 let plandeTratamiento: PlandeTratamiento;
 plandeTratamiento = {
   id: id,
   odont: odont,
   trabajo	:	trabajo	,
fechaTrab	:	fechaTrab	,
profesor	:	profesor	,
cariadas	:	cariadas	,
perdidas	:	perdidas	,
obturadas	:	obturadas	,
extracciones	:	extracciones	,
indicadas	:	indicadas	,
cariadastem	:	cariadastem	,
perdidastem	:	perdidastem	,
obturadastem	:	obturadastem	,
extraccionestem	:	extraccionestem	,
indicadastem	:	indicadastem	,
nombre	:	nombre	,
cuat	:	cuat	,
equipo	:	equipo	,
sillon	:	sillon	,
nombreaux	:	nombreaux	,
cuataux	:	cuataux	,
equipoaux	:	equipoaux	,
sillonaux	:	sillonaux	,
   paciente: paciente
   };
 this.http
   .put<{ message: string }>('http://localhost:3000/api/plandeTratamiento/' + id, plandeTratamiento)
   .subscribe(response => {
     this.dialog.open(CompletoComponent, {data: {message:  response.message}});
   });
}

}
