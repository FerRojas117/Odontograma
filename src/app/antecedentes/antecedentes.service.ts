import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Antece } from '../modelos/antecedentes.model';

@Injectable({ providedIn: 'root' })
export class AnteceService {
  private ident: Antece[] = [];
  private id: string;

  constructor(private http: HttpClient) {}

  addAntece( motivoconsulta: string,
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
    exploracionradiografica: string,
    porqueOrganos	:string,
    siReemplazoOrganos	:string,
    comoReemplazoOrganos	:string,
    cuandoReemplazoOrganos	:string,
    cualesCirugias	:string,
    problemasAnestesia	:string,
    cualesProblemas	:string,
    cuidadoHospital	:string,
    cuidadoMedico	:string,
    cuidadoHistorial	:string,
    cuidadoParaque	:string,
    cualesDrogas	:string,
    cualesHemorragias	:string,
    cualesAlergias	:string,
    consultaPorque	:string,
    organos:string,
    cuantosOrganos:string,
    vistmedult:string,


    ) {
    const registrarAntece: any = {
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
      porqueOrganos	:	porqueOrganos	,
      siReemplazoOrganos	:	siReemplazoOrganos	,
      comoReemplazoOrganos	:	comoReemplazoOrganos	,
      cuandoReemplazoOrganos	:	cuandoReemplazoOrganos	,
      cualesCirugias	:	cualesCirugias	,
      problemasAnestesia	:	problemasAnestesia	,
      cualesProblemas	:	cualesProblemas	,
      cuidadoHospital	:	cuidadoHospital	,
      cuidadoMedico	:	cuidadoMedico	,
      cuidadoHistorial	:	cuidadoHistorial	,
      cuidadoParaque	:	cuidadoParaque	,
      cualesDrogas	:	cualesDrogas	,
      cualesHemorragias	:	cualesHemorragias	,
      cualesAlergias	:	cualesAlergias	,
      consultaPorque	:	consultaPorque	,
      organos:organos,
      cuantosOrganos:cuantosOrganos,
      vistmedult:vistmedult,
    };
    // imprimir objeto con los datos del front end
    console.log(registrarAntece);
    /*
    this.http
      .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
      .subscribe(responseData => {
        this.id = responseData._id;
      });
      */
  }

}