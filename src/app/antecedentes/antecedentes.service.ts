import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Antece } from '../modelos/antecedentes.model';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog

@Injectable({ providedIn: 'root' })
export class AnteceService {
  private ident: Antece[] = [];
  id;
  antece: Antece;
  constructor(private http: HttpClient,
  private dialog: MatDialog) {}

  addAntece(
    motivoconsulta: string,
    cuanvisito: string,
    motivo: string,
    cdcuantiempo: string,
    radiografia: string,
    cuantasRadio: string,
    cuandoRadio: string,
    organos: string,
    siReemplazoOrganos: string,
    porqueOrganos: string,
    cuantosOrganos: string,
    comoReemplazoOrganos: string,
    cuanReemplazoOrganos: string,
    cirugias: string[], // array
    proanestesia: string,
    cualesProblemas: string,
    malestar: string[], // array
    explique: string,
    cuidadoMedico: string,
    cuidadoHospital: string,
    medico: string,
    cuidadoHistorial: string,
    vistmedult: string,
    paraque: string,
    drogas: string,
    cualesDrogas: string,
    hemorragiass: string[], // array
    recalergicas: string[], // array
    consmedica: string,
    consultaPorque: string,
    cavidad: string[], // array
    higieneo: string[], // array
    calculos: string[], // array
    exploracionradiografica: string,
    paciente: string,
    ) {
    const registrarAntece: any = {
      motivoconsulta: motivoconsulta,
      cuanvisito: cuanvisito,
      motivo: motivo,
      cdcuantiempo: cdcuantiempo,
      radiografia: radiografia,
      cuantasRadio: cuantasRadio,
      cuandoRadio: cuandoRadio,
      organos: organos,
      siReemplazoOrganos: siReemplazoOrganos,
      porqueOrganos: porqueOrganos,
      cuantosOrganos: cuantosOrganos,
      comoReemplazoOrganos: comoReemplazoOrganos,
      cuanReemplazoOrganos: cuanReemplazoOrganos,
      cirugias: cirugias, // array
      proanestesia: proanestesia,
      cualesProblemas: cualesProblemas,
      malestar: malestar, // array
      explique: explique,
      cuidadoMedico: cuidadoMedico,
      cuidadoHospital: cuidadoHospital,
      medico: medico,
      cuidadoHistorial: cuidadoHistorial,
      vistmedult: vistmedult,
      paraque: paraque,
      drogas: drogas,
      cualesDrogas: cualesDrogas,
      hemorragiass: hemorragiass, // array
      recalergicas: recalergicas, // array
      consmedica: consmedica,
      consultaPorque: consultaPorque,
      cavidad: cavidad, // array
      higieneo: higieneo, // array
      calculos: calculos, // array
      exploracionradiografica: exploracionradiografica,
      paciente: paciente,
    };
    console.log(registrarAntece);
    this.http
      .post<{ message: string }>('http://localhost:3000/api/antEstoma', registrarAntece)
      .subscribe(responseData => {
        this.dialog.open(CompletoComponent, {data: {message:  responseData.message}});
      });
  }
  getAntece(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
      motivoconsulta:  string;
      cuanvisito: string;
      motivo: string;
      cdcuantiempo: string;
      radiografia: string;
      cuantasRadio: string;
      cuandoRadio: string;
      organos: string;
      siReemplazoOrganos: string;
      porqueOrganos: string;
      cuantosOrganos: string;
      comoReemplazoOrganos: string;
      cuanReemplazoOrganos: string;
      cirugias:  string[];  // array
      proanestesia: string;
      cualesProblemas: string;
      malestar:  string[];  // array
      explique: string;
      cuidadoMedico: string;
      cuidadoHospital: string;
      medico: string;
      cuidadoHistorial: string;
      vistmedult: string;
      paraque: string;
      drogas: string;
      cualesDrogas: string;
      hemorragiass:  string[];  // array
      recalergicas:  string[];  // array
      consmedica: string;
      consultaPorque: string;
      cavidad:  string[];  // array
      higieneo:  string[];  // array
      calculos:  string[];  // array
      exploracionradiografica: string;
      paciente:  string;
    }>('http://localhost:3000/api/antEstoma/' + id);
  }

  updateAntece(
    id: string,
    motivoconsulta: string,
    cuanvisito: string,
    motivo: string,
    cdcuantiempo: string,
    radiografia: string,
    cuantasRadio: string,
    cuandoRadio: string,
    organos: string,
    siReemplazoOrganos: string,
    porqueOrganos: string,
    cuantosOrganos: string,
    comoReemplazoOrganos: string,
    cuanReemplazoOrganos: string,
    cirugias: string[], // array
    proanestesia: string,
    cualesProblemas: string,
    malestar: string[], // array
    explique: string,
    cuidadoMedico: string,
    cuidadoHospital: string,
    medico: string,
    cuidadoHistorial: string,
    vistmedult: string,
    paraque: string,
    drogas: string,
    cualesDrogas: string,
    hemorragiass: string[], // array
    recalergicas: string[], // array
    consmedica: string,
    consultaPorque: string,
    cavidad: string[], // array
    higieneo: string[], // array
    calculos: string[], // array
    exploracionradiografica: string,
    paciente: string,
  ) {
    let antece: Antece;
    antece = {
      id: id,
      motivoconsulta: motivoconsulta,
      cuanvisito: cuanvisito,
      motivo: motivo,
      cdcuantiempo: cdcuantiempo,
      radiografia: radiografia,
      cuantasRadio: cuantasRadio,
      cuandoRadio: cuandoRadio,
      organos: organos,
      siReemplazoOrganos: siReemplazoOrganos,
      porqueOrganos: porqueOrganos,
      cuantosOrganos: cuantosOrganos,
      comoReemplazoOrganos: comoReemplazoOrganos,
      cuanReemplazoOrganos: cuanReemplazoOrganos,
      cirugias: cirugias, // array
      proanestesia: proanestesia,
      cualesProblemas: cualesProblemas,
      malestar: malestar, // array
      explique: explique,
      cuidadoMedico: cuidadoMedico,
      cuidadoHospital: cuidadoHospital,
      medico: medico,
      cuidadoHistorial: cuidadoHistorial,
      vistmedult: vistmedult,
      paraque: paraque,
      drogas: drogas,
      cualesDrogas: cualesDrogas,
      hemorragiass: hemorragiass, // array
      recalergicas: recalergicas, // array
      consmedica: consmedica,
      consultaPorque: consultaPorque,
      cavidad: cavidad, // array
      higieneo: higieneo, // array
      calculos: calculos, // array
      exploracionradiografica: exploracionradiografica,
      paciente: paciente,
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/exploFisica/' + id,
      antece)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
