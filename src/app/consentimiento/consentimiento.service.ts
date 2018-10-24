import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Consen } from '../modelos/consentimiento.model';

@Injectable({ providedIn: 'root' })
export class ConsenService {
  private consen: Consen[] = [];
  private id: string;

  constructor(private http: HttpClient) {}

  addConsen(
    fechaConsen: Date,
    paciente	:	string,
    alumno	:	string,
     odontologo	:	string,
          nombre1	:	string,
    ) {
    const registrarConsen: any = {
        fechaConsen: fechaConsen,
        paciente:	paciente,
        alumno:	alumno,
        odontologo:	odontologo,
        nombre1	: nombre1,
    };
   // imprimir objeto con los datos del front end
   console.log(registrarConsen);
   /*
   this.http
     .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
     .subscribe(responseData => {
       this.id = responseData._id;
     });
     */
 }

}
