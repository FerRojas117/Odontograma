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


  addAntG( anthereditarios: string,
      religion: string,
      tiprelsex: string,
      parejas: string,
      calalim: string,
      higpers: string,
      sedentarismo: string,
      calhabit: string,
      perspat: string,
      ginecoobst: string,
      edades: string,
      planifami: string,
      partos  :string,
      fechaParto  :string,
      planifamitiem :string,
      cuantosParto  :string,
      menarca :string,
      embarazos :string,
      bajoPeso  :string,
      edadHijos :string,
      hijosMacro  :string,
      ritmo :string,
      regla :string,
      cesareas  :string,
      vidaSex :string,
      abortos :string,
      paciente: string,
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
      ginecoobst: ginecoobst,
      edades: edades,
      planifami: planifami,
      partos  : partos  ,
fechaParto  : fechaParto  ,
planifamitiem : planifamitiem ,
cuantosParto  : cuantosParto  ,
menarca : menarca ,
embarazos : embarazos ,
bajoPeso  : bajoPeso  ,
edadHijos : edadHijos ,
hijosMacro  : hijosMacro  ,
ritmo : ritmo ,
regla : regla ,
cesareas  : cesareas  ,
vidaSex : vidaSex ,
abortos : abortos ,
paciente: paciente
    };
    console.log(registrarAntG);
    this.http
      .post<{ _id: string }>('http://localhost:3000/api/antGenerales', registrarAntG)
      .subscribe(responseData => {
        this.id = responseData._id;
      });
  }
  // ROUTER GET
  getAntG(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
      religion	:string;
tiprelsex	:string;
parejas	:string;
calalim	:string;
higpers	:string;
sedentarismo	:string;
calhabit	:string;
perspat	:string;
ginecoobst	:string;
edades	:string;
planifami	:string;
partos	:string;
fechaParto	:string;
planifamitiem	:string;
cuantosParto	:string;
menarca	:string;
embarazos	:string;
bajoPeso	:string;
edadHijos	:string;
hijosMacro	:string;
ritmo	:string;
regla	:string;
cesareas	:string;
vidaSex	:string;
abortos	:string;
paciente: string;
    }>('http://localhost:3000/api/antGenerales/' + id);
  }

  updateAntG(
    id: string,
    religion	:string,
    tiprelsex	:string,
    parejas	:string,
    calalim	:string,
    higpers	:string,
    sedentarismo	:string,
    calhabit	:string,
    perspat	:string,
    ginecoobst	:string,
    edades	:string,
    planifami	:string,
    partos	:string,
    fechaParto	:string,
    planifamitiem	:string,
    cuantosParto	:string,
    menarca	:string,
    embarazos	:string,
    bajoPeso	:string,
    edadHijos	:string,
    hijosMacro	:string,
    ritmo	:string,
    regla	:string,
    cesareas	:string,
    vidaSex	:string,
    abortos	:string,
    paciente: string,
  ) {
    let antg: AntG;
    antg = {
      id: id,
      religion	:	religion	,
tiprelsex	:	tiprelsex	,
parejas	:	parejas	,
calalim	:	calalim	,
higpers	:	higpers	,
sedentarismo	:	sedentarismo	,
calhabit	:	calhabit	,
perspat	:	perspat	,
ginecoobst	:	ginecoobst	,
edades	:	edades	,
planifami	:	planifami	,
partos	:	partos	,
fechaParto	:	fechaParto	,
planifamitiem	:	planifamitiem	,
cuantosParto	:	cuantosParto	,
menarca	:	menarca	,
embarazos	:	embarazos	,
bajoPeso	:	bajoPeso	,
edadHijos	:	edadHijos	,
hijosMacro	:	hijosMacro	,
ritmo	:	ritmo	,
regla	:	regla	,
cesareas	:	cesareas	,
vidaSex	:	vidaSex	,
abortos	:	abortos	,
paciente: paciente
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/antGenerales/' + id, antg)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
