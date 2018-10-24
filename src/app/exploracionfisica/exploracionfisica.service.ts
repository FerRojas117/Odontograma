import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Explo } from '../modelos/exploracionfisica.model';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExploService {
  private ident: Explo[] = [];
  id;
  explo: Explo;
  constructor(private http: HttpClient) {}

  addExplo(
    peso: string,
    talla: string,
    fCardiaca: string,
    presionArterial: string,
    temperatura: string,
    frecuenciaResp: string,
    inspeccionGeneral: string,
    cabeza: string,
    cuello: string,
    torax: string,
    abdomen: string,
    columnaVertebral: string,
    extremidades: string,
    diagnostico: string,
    observaciones: string,
    recomendaciones: string,
    nombreMedico: string,
    paciente: string,
    ) {
    const registrarExplo: any = {
      peso: peso,
      talla: talla,
      fCardiaca: fCardiaca,
      presionArterial: presionArterial,
      temperatura: temperatura,
      frecuenciaResp: frecuenciaResp,
      inspeccionGeneral: inspeccionGeneral,
      cabeza: cabeza,
      cuello: cuello,
      torax: torax,
      abdomen: abdomen,
      columnaVertebral: columnaVertebral,
      extremidades: extremidades,
      diagnostico: diagnostico,
      observaciones: observaciones,
      recomendaciones: recomendaciones,
      nombreMedico: nombreMedico,
      paciente: paciente
    };
      console.log(registrarExplo);
      this.http
        .post<{ _id: string }>('http://localhost:3000/api/exploFisica', registrarExplo)
        .subscribe(responseData => {
          this.id = responseData._id;
        });
    }


    getExplo(id: string) {
      console.log(id);
      return this.http.get<{
        _id: string;
        peso: string;
        talla: string;
        fCardiaca: string;
        presionArterial: string;
        temperatura: string;
        frecuenciaResp: string;
        inspeccionGeneral: string;
        cabeza: string;
        cuello: string;
        torax: string;
        abdomen: string;
        columnaVertebral: string;
        extremidades: string;
        diagnostico: string;
        observaciones: string;
        recomendaciones: string;
        nombreMedico: string;
        paciente: string;
      }>('http://localhost:3000/api/exploFisica/' + id);
    }
  }
