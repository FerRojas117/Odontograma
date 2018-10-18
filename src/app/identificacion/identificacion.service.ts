import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


import { Ident } from '../modelos/identificacion.model';

@Injectable({ providedIn: 'root' })
export class IdentService {
  private ident: Ident[] = [];
  private id: string;

  private messageUpdated = new Subject<string>();
  private idUpdated = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {}

  addIdent( nombre: string,
      sexo: string,
      edad: string,
      fechaNac: string,
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
      fechaNac: fechaNac,
      estadoCivil: estadoCivil,
      direccion: direccion,
      telefono: telefono,
      ocupacion: ocupacion,
      lugarDeNacimiento: lugarDeNacimiento,
      procedencia: procedencia,
      estadoSocioeconomico: estadoSocioeconomico
    };
    this.http
      .post<{ _id: string, message: string }>('http://localhost:3000/api/ident', registrarIdent)
      .subscribe(responseData => {
        this.id = responseData._id;
        this.idUpdated.next(this.id);
        this.messageUpdated.next(responseData.message);
      });
  }

  getMessageUpdateListener() {
    return this.messageUpdated.asObservable();
  }
  getIdUpdateListener() {
    return this.idUpdated.asObservable();
  }

}


