import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Labo } from '../modelos/laboratoriogabinete.model';

@Injectable({ providedIn: 'root' })
export class LaboService {
  private ident: Labo[] = [];

  constructor(private http: HttpClient) {}

  addLabo(
      resultadosPrevios: string,
      resultPrevios2: string

    ) {
    const registrarLabo: any = {
        resultadosPrevios : resultadosPrevios,
        resultPrevios2 : resultPrevios2
    };
    // imprimir objeto con los datos del front end
    console.log(registrarLabo);
    /*
    this.http
      .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
      .subscribe(responseData => {
        this.id = responseData._id;
      });
      */
  }
 
 }
 