import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Labo } from '../modelos/laboratoriogabinete.model';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Explo } from '../modelos/exploracionfisica.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog

@Injectable({ providedIn: 'root' })
export class LaboService {
  private ident: Labo[] = [];
  id;
  labo: Labo;
  constructor(private http: HttpClient,
    private dialog: MatDialog) {}

  addLabo(
      resultadosPrevios: string,
      resultPrevios2: string,
      paciente: string,

    ) {
    const registrarLabo: any = {
        resultadosPrevios : resultadosPrevios,
        resultPrevios2 : resultPrevios2,
        paciente: paciente
    };
    // imprimir objeto con los datos del front end
    console.log(registrarLabo);
    this.http
        .post<{ message: string }>('http://localhost:3000/api/labo', registrarLabo)
        .subscribe(responseData => {
          this.dialog.open(CompletoComponent, {data: {message:  responseData.message}});
        });
    }

// ROUTER GET
    getLabo(id: string) {
      console.log(id);
      return this.http.get<{
        _id: string;
        resultadosPrevios: string;
        resultPrevios2: string;
        paciente: string;
      }>('http://localhost:3000/api/labo/' + id);
    }

/// añadir tambien ca componente
    updateLabo(
      id: string,
      resultadosPrevios: string,
      resultPrevios2: string,
      paciente: string,
    ) {
      let labo: Labo;
      labo = {
        id: id,
        resultadosPrevios: resultadosPrevios,
        resultPrevios2: resultPrevios2,
        paciente: paciente
        };
      this.http
        .put<{ message: string }>('http://localhost:3000/api/labo/' + id, labo)
        .subscribe(response => {
          this.dialog.open(CompletoComponent, {data: {message:  response.message}});
        });
    }

  }
