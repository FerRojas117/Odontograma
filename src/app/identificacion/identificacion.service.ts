import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CompletoComponent } from '../completo/completo.component';
import { Ident } from '../modelos/identificacion.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class IdentService {
  private ident: Ident[] = [];
  private id: string;
  private messageUpdated = new Subject<string>();
  private idUpdated = new Subject<string>();

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private router: Router
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
      .post<{ id: string, message: string }>('http://localhost:3000/api/ident', registrarIdent)
      .subscribe(responseData => {
        this.id = responseData.id;
        this.saveIdData( this.id);
        this.idUpdated.next(this.id);
        this.messageUpdated.next(responseData.message);
      });
  }


  private saveIdData(pacienteId: string) {
    localStorage.setItem('pacienteId', pacienteId);
  }

  getIdent(id: string) {
    return this.http.get<{
      _id: string;
      nombre: string;
      sexo: string;
      edad: string;
      fechaNac: string;
      estadoCivil: string;
      direccion: string;
      telefono: string;
      ocupacion: string;
      lugarDeNacimiento: string;
      procedencia: string;
      estadoSocioeconomico: string;
      creator: string;
    }>('http://localhost:3000/api/ident/' + id);
  }

  updateIdent(
    id: string,
    nombre: string,
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
    let identData: Ident;
    identData = {
      id: id,
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
      estadoSocioeconomico: estadoSocioeconomico,
      creator: null
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/ident/' + id, identData)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

  getMessageUpdateListener() {
    return this.messageUpdated.asObservable();
  }
  getIdUpdateListener() {
    return this.idUpdated.asObservable();
  }

}


