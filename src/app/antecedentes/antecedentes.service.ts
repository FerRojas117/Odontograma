import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { AntEst} from '../modelos/antecedentes_e.model';

@Injectable({ providedIn: 'root' })
export class AnteceService {
  private ident: AntEst[] = [];

  constructor(private http: HttpClient) {}

  addAntEst( motivoconsulta: string,
    cuanvisito: string,
    motivo: string,
    cdcuantiempo: string,
    radiografias: string,
    cuantascuando: string,
    orgdentarios: string,
    cuantosporque: string,
    remplazo: string,
    comocuando: string,
    cirugias: string,
    tipos: string,
    proanestecia: string,
    quetipo: string,
    higieneoral: string,
    algvezhateni: string,
    explique: string,
    cuidadomedico: string,
    hospital: string,
    vismedult: string,
    paraque: string,
    drogas: string,
    cualesdr: string,
    hemorragias: string,
    hsig: string,
    reacalergicas: string,
    tipreac: string,
    cualesali: string,
    cualesd: string,
    cualesanes: string,
    cualesotr: string,
    consmedica: string,
    porque: string,
    obs: string,
    exploracion: string,
    deschigieneoral: string,
    calculos: string,
    exploracionradiografica: string
    ) {
    const registrarAntEst: any = {
      motivoconsulta: motivoconsulta,
      cuanvisito: cuanvisito,
      motivo: motivo,
      cdcuantiempo: cdcuantiempo,
      radiografias: radiografias,
      cuantascuando: cuantascuando,
      orgdentarios: orgdentarios,
      cuantosporque: cuantosporque,
      remplazo: remplazo,
      comocuando: comocuando,
      cirugias: cirugias,
      tipos: tipos,
      proanestecia: proanestecia,
      quetipo: quetipo,
      higieneoral: higieneoral,
      algvezhateni: algvezhateni,
      explique: explique,
      cuidadomedico: cuidadomedico,
      hospital: hospital,
      vismedult: vismedult,
      paraque: paraque,
      drogas: drogas,
      cualesdr: cualesdr,
      hemorragias: hemorragias,
      hsig: hsig,
      reacalergicas: reacalergicas,
      tipreac: tipreac,
      cualesali: cualesali,
      cualesd: cualesd,
      cualesotr: cualesotr,
      consmedica: consmedica,
      porque: porque,
      obs: obs,
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
