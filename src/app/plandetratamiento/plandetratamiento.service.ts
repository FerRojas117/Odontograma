import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlandeTratamiento } from '../modelos/plandetratamiento.model';


@Injectable({ providedIn: 'root' })
export class PlandetratService {
  private plandeTratamiento: PlandeTratamiento[] = [];

  constructor(private http: HttpClient) {}

  addPlandeTratamiento( 
    noempleado: string,

    ) {
    const registrarPlandeTratamiento: any = {
      noempleado:noempleado,
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

