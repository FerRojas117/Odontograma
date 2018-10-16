import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Subject } from 'rxjs';
//import { map } from 'rxjs/operators';
import { Explo } from '../modelos/exploracionfisica.model';

@Injectable({ providedIn: 'root' })
export class ExploService {
  private ident: Explo[] = [];

  constructor(private http: HttpClient) {}

  addExplo(
      peso: string,
      talla: string,
      frecuenciaCardiaca: string,
      presionArterial: string,
      temperatura: string,
      frecuenciaRespiratoria: string,
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
      nombredelMedico: string,
    ) {
    const registrarExplo: any = {
      peso: peso,
      talla: talla,
      frecuenciaCardiaca: frecuenciaCardiaca,
      presionArterial: presionArterial,
      temperatura: temperatura,
      frecuenciaRespiratoria: frecuenciaRespiratoria,
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
      nombredelMedico: nombredelMedico,
    };
      // imprimir objeto con los datos del front end
      console.log(registrarExplo);
      /*
      this.http
        .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
        .subscribe(responseData => {
          this.id = responseData._id;
        });
        */
    }
  
  }
  
 