import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Subject } from 'rxjs';
//import { map } from 'rxjs/operators';
import { Ident } from '../modelos/est_laboratorio_gabinete.model';

@Injectable({ providedIn: 'root' })
export class IdentService {
  private ident: Ident[] = [];

  constructor(private http: HttpClient) {}

  addIdent(
      resultadosPrevios: string
      //Resultados de estudio Auxiliar del diagnostico practicado previamente
    ) {
    const registrarIdent: any = {
        resultadosPrevios : resultadosPrevios
        //---------------------------------------------------
    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarIdent)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
