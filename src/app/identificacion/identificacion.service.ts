import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Ident } from '../modelos/identificacion.model';

@Injectable({ providedIn: 'root' })
export class IdentService {
  private ident: Ident[] = [];

  constructor(private http: HttpClient) {}

  addIdent( nombre: string,
      sexo: string,
      edad: string,
      estadoCivil: string,
      direccion: string,
      telefono: string,
      ocupacion: string,
      lugarDeNacimiento: string,
      procedencia: string,
      estadoSocioeconomico: string
    ) {
    const registrarIdent: any = {
      nombre: nombre,
      sexo: sexo,
      edad: edad,
      estadoCivil: estadoCivil,
      direccion: direccion,
      telefono: telefono,
      ocupacion: ocupacion,
      lugarDeNacimiento: lugarDeNacimiento,
      procedencia: procedencia,
      estadoSocioeconomico: estadoSocioeconomico
    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarIdent)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
