import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Estu } from '../modelos/estudiosocio.model';
import { setContextDirty } from '@angular/core/src/render3/styling';

@Injectable({ providedIn: 'root' })
export class EstuService {
  private ident: Estu[] = [];

  constructor(private http: HttpClient) {}

  addEstu(nombre: string,
    edad: string,
    direccion: string,
    tiemporadi: string,
    fechnac: string,
    telefono: string,
    lugarDeNacimiento: string,
    nacionalidad: string,
    sexo: string,
    estadocivil: string,
    ocupacion: string,
    lugar: string,
    direcc: string,
    ingresos: string,
    gradoinst: string,
    numfam: string,
    digsoci: string,
    asignacion: string,
    tutor: string,
    obs: string
    ) {
    const registrarEstu: any = {
      nombre: nombre,
      edad: edad,
      direccion: direccion,
      tiemporadi: tiemporadi,
      fechnac: fechnac,
      telefono: telefono,
      lugarDeNacimiento: lugarDeNacimiento,
      nacionalidad: nacionalidad,
      sexo: sexo,
      estadocivil: estadocivil,
      ocupacion: ocupacion,
      lugar: lugar,
      direcc: direcc,
      ingresos: ingresos,
      gradoinst: gradoinst,
      numfam: numfam,
      digsoci: digsoci,
      asignacion: asignacion,
      tutor: tutor,
      obs: obs,
    };
       // imprimir objeto con los datos del front end
       console.log(registrarIdent);
       /*
       this.http
         .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
         .subscribe(responseData => {
           this.id = responseData._id;
         });
         */
     }
   
   }