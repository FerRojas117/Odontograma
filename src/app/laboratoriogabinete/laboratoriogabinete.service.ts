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
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarLabo)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
