import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reha } from '../modelos/rehabilitacion.model';

@Injectable({ providedIn: 'root' })
export class RehaService {
  private ident: Reha[] = [];

  constructor(private http: HttpClient) {}

  addReha(
      referidoPor: string,
      motivoConsulta: string,
      moEst: string,
      descripcion: string

    ) {
    const registrarReha: any = {
        referidoPor : referidoPor,
        motivoConsulta : motivoConsulta,
        moEst : moEst,
        descripcion : descripcion, 
    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarReha)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}