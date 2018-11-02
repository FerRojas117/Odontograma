import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Consen } from '../modelos/consentimiento.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog

@Injectable({ providedIn: 'root' })
export class ConsenService {
  private ident: Consen[] = [];
  id;
  consen: Consen;

  constructor(private http: HttpClient,
    private dialog: MatDialog) {}

  addConsen(
    fechaConsen: Date,
    pacienteh	:	string,
    alumno	:	string,
     odontologo	:	string,
          nombre1	:	string,
          paciente: string,
    ) {
    const registrarConsen: any = {
        fechaConsen: fechaConsen,
        pacienteh:	pacienteh,
        alumno:	alumno,
        odontologo:	odontologo,
        nombre1	: nombre1,
        paciente: paciente
    };
    console.log(registrarConsen);
      this.http
        .post<{ _id: string }>('http://localhost:3000/api/consen', registrarConsen)
        .subscribe(responseData => {
          this.id = responseData._id;
        });
    }
    getConsen(id: string) {
      console.log(id);
      return this.http.get<{
        _id: string;
        fechaConsen: Date;
        pacienteh	:	string;
        alumno	:	string;
        odontologo	:	string;
        nombre1	:	string;
        paciente: string;
      }>('http://localhost:3000/api/consen/' + id);
    }
    updateConsen(
      id: string,
      fechaConsen: Date,
      pacienteh	:	string,
      alumno	:	string,
       odontologo	:	string,
            nombre1	:	string,
            paciente: string,
    ) {
      let consen : Consen;
      consen = {
        id: id,
        fechaConsen: fechaConsen,
        pacienteh:	pacienteh,
        alumno:	alumno,
        odontologo:	odontologo,
        nombre1	: nombre1,
        paciente: paciente
        };
      this.http
        .put<{ message: string }>('http://localhost:3000/api/consen/' + id, consen)
        .subscribe(response => {
          this.dialog.open(CompletoComponent, {data: {message:  response.message}});
        });
    }

  }
