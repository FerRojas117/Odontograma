import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Estu } from '../modelos/estudiosocio.model';
import { setContextDirty } from '@angular/core/src/render3/styling';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog

@Injectable({ providedIn: 'root' })
export class EstuService {
  private ident: Estu[] = [];
  id;
  estu: Estu;

  constructor(private http: HttpClient,
    private dialog: MatDialog) {}

  addEstu(
    direccion	:string,
    tiemporadi	:string,
    fechnac	:string,
    telefono	:string,
    lugarDeNacimiento	:string,
    nacionalidad	:string,
    sexo	:string,
    estadocivil	:string,
    ocupacion	:string,
    lugar	:string,
    direcc	:string,
    ingresos	:string,
    gradoinst	:string,
    numfam	:string,
    digsoci	:string,
    asignacion	:string,
    tutor	:string,
    obs	:string,
    paciente: string,
    ) {


    const registrarEstu: any = {
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
      paciente: paciente
    };
    console.log(registrarEstu);
    this.http
      .post<{ message: string }>('http://localhost:3000/api/estu', registrarEstu)
      .subscribe(responseData => {
        this.dialog.open(CompletoComponent, {data: {message:  responseData.message}});
      });
  }

// ROUTER GET
  getEstu(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
direccion	:string;
tiemporadi	:string;
fechnac	:string;
telefono	:string;
lugarDeNacimiento	:string;
nacionalidad	:string;
sexo	:string;
estadocivil	:string;
ocupacion	:string;
lugar	:string;
direcc	:string;
ingresos	:string;
gradoinst	:string;
numfam	:string;
digsoci	:string;
asignacion	:string;
tutor	:string;
obs	:string;
      paciente: string;
    }>('http://localhost:3000/api/estu/' + id);
  }

/// añadir tambien ca componente
  updateEstu(
    id: string,
direccion	:string,
tiemporadi	:string,
fechnac	:string,
telefono	:string,
lugarDeNacimiento	:string,
nacionalidad	:string,
sexo	:string,
estadocivil	:string,
ocupacion	:string,
lugar	:string,
direcc	:string,
ingresos	:string,
gradoinst	:string,
numfam	:string,
digsoci	:string,
asignacion	:string,
tutor	:string,
obs	:string,
    paciente: string,
  ) {
    let estu : Estu;
    estu = {
      id: id,
      direccion	:	direccion	,
      tiemporadi	:	tiemporadi	,
      fechnac	:	fechnac	,
      telefono	:	telefono	,
      lugarDeNacimiento	:	lugarDeNacimiento	,
      nacionalidad	:	nacionalidad	,
      sexo	:	sexo	,
      estadocivil	:	estadocivil	,
      ocupacion	:	ocupacion	,
      lugar	:	lugar	,
      direcc	:	direcc	,
      ingresos	:	ingresos	,
      gradoinst	:	gradoinst	,
      numfam	:	numfam	,
      digsoci	:	digsoci	,
      asignacion	:	asignacion	,
      tutor	:	tutor	,
      obs	:	obs	,
      paciente: paciente
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/estu/' + id, estu)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
