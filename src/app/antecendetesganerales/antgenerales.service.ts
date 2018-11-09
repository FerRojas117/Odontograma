import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AntG } from '../modelos/antgenerales.model';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialo

@Injectable({ providedIn: 'root' })
export class AntGService {
  private ident: AntG[] = [];
  id;
  antg: AntG;

  constructor(private http: HttpClient,
    private dialog: MatDialog) {}


  addAntG(
    anthereditarios: string,
    religion: string,
    tiprelsex: string,
    parejas: string,
    calalim: string,
    higpers: string,
    sedentarismo: string,
    calhabit: string,
    perspat: string,
    menarca: string,
    embarazos: string,
    bajoPeso: string,
    edadHijos: string,
    hijosMacro: string,
    ritmo: string,
    regla: string,
    cesareas: string,
    vidaSex: string,
    partos: string,
    fechaParto: string,
    cuantosParto: string,
    abortos: string,
    planifami: string,
    planifamitiem: string,
    paciente: string
    ) {
    const registrarAntG: any = {
      anthereditarios: anthereditarios,
      religion: religion,
      tiprelsex: tiprelsex,
      parejas: parejas,
      calalim: calalim,
      higpers: higpers,
      sedentarismo: sedentarismo,
      calhabit: calhabit,
      perspat: perspat,
      menarca: menarca,
      embarazos: embarazos,
      bajoPeso: bajoPeso,
      edadHijos: edadHijos,
      hijosMacro: hijosMacro,
      ritmo: ritmo,
      regla: regla,
      cesareas: cesareas,
      vidaSex: vidaSex,
      partos: partos,
      fechaParto: fechaParto,
      cuantosParto: cuantosParto,
      abortos: abortos,
      planifami: planifami,
      planifamitiem: planifamitiem,
      paciente: paciente
    };
    console.log(registrarAntG);
    this.http
      .post<{ message: string }>('http://localhost:3000/api/antGenerales', registrarAntG)
      .subscribe(responseData => {
        this.dialog.open(CompletoComponent, {data: {message:  responseData.message}});
      });
  }
  // ROUTER GET
  getAntG(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
      anthereditarios: string,
      religion: string,
      tiprelsex: string,
      parejas: string,
      calalim: string,
      higpers: string,
      sedentarismo: string,
      calhabit: string,
      perspat: string,
      menarca: string,
      embarazos: string,
      bajoPeso: string,
      edadHijos: string,
      hijosMacro: string,
      ritmo: string,
      regla: string,
      cesareas: string,
      vidaSex: string,
      partos: string,
      fechaParto: string,
      cuantosParto: string,
      abortos: string,
      planifami: string,
      planifamitiem: string,
      paciente: string
    }>('http://localhost:3000/api/antGenerales/' + id);
  }

  updateAntG(
    id: string,
    anthereditarios: string,
    religion: string,
    tiprelsex: string,
    parejas: string,
    calalim: string,
    higpers: string,
    sedentarismo: string,
    calhabit: string,
    perspat: string,
    menarca: string,
    embarazos: string,
    bajoPeso: string,
    edadHijos: string,
    hijosMacro: string,
    ritmo: string,
    regla: string,
    cesareas: string,
    vidaSex: string,
    partos: string,
    fechaParto: string,
    cuantosParto: string,
    abortos: string,
    planifami: string,
    planifamitiem: string,
    paciente: string
  ) {
    let antg: AntG;
    antg = {
      id: id,
      anthereditarios: anthereditarios,
      religion: religion,
      tiprelsex: tiprelsex,
      parejas: parejas,
      calalim: calalim,
      higpers: higpers,
      sedentarismo: sedentarismo,
      calhabit: calhabit,
      perspat: perspat,
      menarca: menarca,
      embarazos: embarazos,
      bajoPeso: bajoPeso,
      edadHijos: edadHijos,
      hijosMacro: hijosMacro,
      ritmo: ritmo,
      regla: regla,
      cesareas: cesareas,
      vidaSex: vidaSex,
      partos: partos,
      fechaParto: fechaParto,
      cuantosParto: cuantosParto,
      abortos: abortos,
      planifami: planifami,
      planifamitiem: planifamitiem,
      paciente: paciente
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/antGenerales/' + id, antg)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
