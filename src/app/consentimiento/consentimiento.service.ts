import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Consen } from '../modelos/consentimiento.model';

@Injectable({ providedIn: 'root' })
export class ConsenService {
  private consen: Consen[] = [];

  constructor(private http: HttpClient) {}

  addConsen( 
    paciente	:	string,
    alumno	:	string,
     odontologo	:	string,
          nombre1	:	string,
          nombre2	:	string    
    ) {
    const registrarConsen: any = {
        paciente	:	paciente	,
        alumno	:	alumno	,
         odontologo	:	 odontologo	,
        nombre1	:	      nombre1	,
              nombre2	:	      nombre2	,
        

    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarConsen)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
