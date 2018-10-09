import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Subject } from 'rxjs';
//import { map } from 'rxjs/operators';


import { Ident } from '../modelos/interrogatorio.model';

@Injectable({ providedIn: 'root' })
export class IdentService {
  private ident: Ident[] = [];

  constructor(private http: HttpClient) {}

  addIdent(
      presionArterial: string,
      aparatoRespiratorio: string,
      aparatoDigestivo: string,
    ) {
    const registrarIdent: any = {
        presionArterial: presionArterial,
        aparatoRespiratorio: aparatoRespiratorio,
        aparatoDigestivo: aparatoDigestivo
    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarIdent)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
