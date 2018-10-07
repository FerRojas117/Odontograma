import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Antece } from '../modelos/antecedentes.model';

@Injectable({ providedIn: 'root' })
export class AnteceService {
  private ident: Antece[] = [];

  constructor(private http: HttpClient) {}

  addAntece( motivoconsulta: string,
    cuanvisito: string,
    motivo: string,
    cdcuantiempo: string,
    radiografias: string,
    cuantascuando: string,
    orgdentarios: string,
    remplazo: string,
    comocuando: string,
    cirugias: string,
    proanestecia: string,
    higieneoral: string,
    algvezhateni: string,
    cuidadomedico: string,
    vismedult: string,
    paraque: string,
    drogas: string,
    hemorragias: string,
    reacalergicas: string,
    consmedica: string,
    porque: string,
    exploracion: string,
    deschigieneoral: string,
    calculos: string,
    exploracionradiografica: string
    ) {
    const registrarAntece: any = {
      motivoconsulta: motivoconsulta,
      cuanvisito: cuanvisito,
      motivo: motivo,
      cdcuantiempo: cdcuantiempo,
      radiografias: radiografias,
      orgdentarios: orgdentarios,
      remplazo: remplazo,
      cirugias: cirugias,
      proanestecia: proanestecia,
      higieneoral: higieneoral,
      algvezhateni: algvezhateni,
      cuidadomedico: cuidadomedico,
      vismedult: vismedult,
      paraque: paraque,
      drogas: drogas,
      hemorragias: hemorragias,
      reacalergicas: reacalergicas,
      consmedica: consmedica,
      porque: porque,
      exploracion: exploracion,
      deschigieneoral: deschigieneoral,
      calculos: calculos,
      exploracionradiografica: exploracionradiografica,
    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/antece', registrarAntece)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
