import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reha } from '../modelos/rehabilitacion.model';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog

@Injectable({ providedIn: 'root' })
export class RehaService {
  private ident: Reha[] = [];
  id;
  reha: Reha;
  constructor(private http: HttpClient,
    private dialog: MatDialog) {}
  addReha(
      referidoPor: string,
      motivoConsulta: string,
      moEst: string,
      descripcion: string,
      diagO: string,
      exTem: string,
      otrasEx: string,
      examenPara: string,
      analisisRadio: string,
      trataProte: string,
      fijo11:string,
fijo12:string,
fijo13:string,
fijo14:string,
fijo15:string,
fijo16:string,
fijo17:string,
fijo18:string,
fijo21:string,
fijo22:string,
fijo23:string,
fijo24:string,
fijo25:string,
fijo26:string,
fijo27:string,
fijo28:string,
fijo41:string,
fijo42:string,
fijo43:string,
fijo44:string,
fijo45:string,
fijo46:string,
fijo47:string,
fijo48:string,
fijo31:string,
fijo32:string,
fijo33:string,
fijo34:string,
fijo35:string,
fijo36:string,
fijo37:string,
fijo38:string,
remov11:string,
remov12:string,
remov13:string,
remov14:string,
remov15:string,
remov16:string,
remov17:string,
remov18:string,
remov21:string,
remov22:string,
remov23:string,
remov24:string,
remov25:string,
remov26:string,
remov27:string,
remov28:string,
remov41:string,
remov42:string,
remov43:string,
remov44:string,
remov45:string,
remov46:string,
remov47:string,
remov48:string,
remov31:string,
remov32:string,
remov33:string,
remov34:string,
remov35:string,
remov36:string,
remov37:string,
remov38:string,
paciente: string,

    ) {
    const registrarReha: any = {
        referidoPor : referidoPor,
        motivoConsulta : motivoConsulta,
        moEst : moEst,
        descripcion : descripcion,
        diagO: diagO,
        exTem: exTem,
        examenPara: examenPara,
        otrasEx: otrasEx,
        analisisRadio: analisisRadio,
        trataProte: trataProte,
        fijo11	:	fijo11	,
fijo12	:	fijo12	,
fijo13	:	fijo13	,
fijo14	:	fijo14	,
fijo15	:	fijo15	,
fijo16	:	fijo16	,
fijo17	:	fijo17	,
fijo18	:	fijo18	,
fijo21	:	fijo21	,
fijo22	:	fijo22	,
fijo23	:	fijo23	,
fijo24	:	fijo24	,
fijo25	:	fijo25	,
fijo26	:	fijo26	,
fijo27	:	fijo27	,
fijo28	:	fijo28	,
fijo41	:	fijo41	,
fijo42	:	fijo42	,
fijo43	:	fijo43	,
fijo44	:	fijo44	,
fijo45	:	fijo45	,
fijo46	:	fijo46	,
fijo47	:	fijo47	,
fijo48	:	fijo48	,
fijo31	:	fijo31	,
fijo32	:	fijo32	,
fijo33	:	fijo33	,
fijo34	:	fijo34	,
fijo35	:	fijo35	,
fijo36	:	fijo36	,
fijo37	:	fijo37	,
fijo38	:	fijo38	,
remov11	:	remov11	,
remov12	:	remov12	,
remov13	:	remov13	,
remov14	:	remov14	,
remov15	:	remov15	,
remov16	:	remov16	,
remov17	:	remov17	,
remov18	:	remov18	,
remov21	:	remov21	,
remov22	:	remov22	,
remov23	:	remov23	,
remov24	:	remov24	,
remov25	:	remov25	,
remov26	:	remov26	,
remov27	:	remov27	,
remov28	:	remov28	,
remov41	:	remov41	,
remov42	:	remov42	,
remov43	:	remov43	,
remov44	:	remov44	,
remov45	:	remov45	,
remov46	:	remov46	,
remov47	:	remov47	,
remov48	:	remov48	,
remov31	:	remov31	,
remov32	:	remov32	,
remov33	:	remov33	,
remov34	:	remov34	,
remov35	:	remov35	,
remov36	:	remov36	,
remov37	:	remov37	,
remov38	:	remov38	,
paciente: paciente

    };
    console.log(registrarReha);
      this.http
        .post<{ message: string }>('http://localhost:3000/api/reha', registrarReha)
        .subscribe(responseData => {
          this.dialog.open(CompletoComponent, {data: {message:  responseData.message}});
        });
    }

// ROUTER GET
    getReha(id: string) {
      console.log(id);
      return this.http.get<{
        _id: string;
        referidoPor	:string;
motivoConsulta	:string;
moEstu	:string;
descripcion	:string;
diagO	:string;
exTem	:string;
examenPara	:string;
otrasEx	:string;
analisisRadio	:string;
trataProte	:string;
fijo11	:string;
fijo12	:string;
fijo13	:string;
fijo14	:string;
fijo15	:string;
fijo16	:string;
fijo17	:string;
fijo18	:string;
fijo21	:string;
fijo22	:string;
fijo23	:string;
fijo24	:string;
fijo25	:string;
fijo26	:string;
fijo27	:string;
fijo28	:string;
fijo41	:string;
fijo42	:string;
fijo43	:string;
fijo44	:string;
fijo45	:string;
fijo46	:string;
fijo47	:string;
fijo48	:string;
fijo31	:string;
fijo32	:string;
fijo33	:string;
fijo34	:string;
fijo35	:string;
fijo36	:string;
fijo37	:string;
fijo38	:string;
remov11	:string;
remov12	:string;
remov13	:string;
remov14	:string;
remov15	:string;
remov16	:string;
remov17	:string;
remov18	:string;
remov21	:string;
remov22	:string;
remov23	:string;
remov24	:string;
remov25	:string;
remov26	:string;
remov27	:string;
remov28	:string;
remov41	:string;
remov42	:string;
remov43	:string;
remov44	:string;
remov45	:string;
remov46	:string;
remov47	:string;
remov48	:string;
remov31	:string;
remov32	:string;
remov33	:string;
remov34	:string;
remov35	:string;
remov36	:string;
remov37	:string;
remov38	:string;

        paciente: string;
      }>('http://localhost:3000/api/reha/' + id);
    }

/// añadir tambien ca componente
    updateReha(
      id: string,
      referidoPor	:string,
motivoConsulta	:string,
moEstu	:string,
descripcion	:string,
diagO	:string,
exTem	:string,
examenPara	:string,
otrasEx	:string,
analisisRadio	:string,
trataProte	:string,
fijo11	:string,
fijo12	:string,
fijo13	:string,
fijo14	:string,
fijo15	:string,
fijo16	:string,
fijo17	:string,
fijo18	:string,
fijo21	:string,
fijo22	:string,
fijo23	:string,
fijo24	:string,
fijo25	:string,
fijo26	:string,
fijo27	:string,
fijo28	:string,
fijo41	:string,
fijo42	:string,
fijo43	:string,
fijo44	:string,
fijo45	:string,
fijo46	:string,
fijo47	:string,
fijo48	:string,
fijo31	:string,
fijo32	:string,
fijo33	:string,
fijo34	:string,
fijo35	:string,
fijo36	:string,
fijo37	:string,
fijo38	:string,
remov11	:string,
remov12	:string,
remov13	:string,
remov14	:string,
remov15	:string,
remov16	:string,
remov17	:string,
remov18	:string,
remov21	:string,
remov22	:string,
remov23	:string,
remov24	:string,
remov25	:string,
remov26	:string,
remov27	:string,
remov28	:string,
remov41	:string,
remov42	:string,
remov43	:string,
remov44	:string,
remov45	:string,
remov46	:string,
remov47	:string,
remov48	:string,
remov31	:string,
remov32	:string,
remov33	:string,
remov34	:string,
remov35	:string,
remov36	:string,
remov37	:string,
remov38	:string,
      paciente: string,
    ) {
      let reha: Reha;
      reha = {
        id: id,
        referidoPor	:	referidoPor	,
        motivoConsulta	:	motivoConsulta	,
        moEstu	:	moEstu	,
        descripcion	:	descripcion	,
        diagO	:	diagO	,
        exTem	:	exTem	,
        examenPara	:	examenPara	,
        otrasEx	:	otrasEx	,
        analisisRadio	:	analisisRadio	,
        trataProte	:	trataProte	,
        fijo11	:	fijo11	,
        fijo12	:	fijo12	,
        fijo13	:	fijo13	,
        fijo14	:	fijo14	,
        fijo15	:	fijo15	,
        fijo16	:	fijo16	,
        fijo17	:	fijo17	,
        fijo18	:	fijo18	,
        fijo21	:	fijo21	,
        fijo22	:	fijo22	,
        fijo23	:	fijo23	,
        fijo24	:	fijo24	,
        fijo25	:	fijo25	,
        fijo26	:	fijo26	,
        fijo27	:	fijo27	,
        fijo28	:	fijo28	,
        fijo41	:	fijo41	,
        fijo42	:	fijo42	,
        fijo43	:	fijo43	,
        fijo44	:	fijo44	,
        fijo45	:	fijo45	,
        fijo46	:	fijo46	,
        fijo47	:	fijo47	,
        fijo48	:	fijo48	,
        fijo31	:	fijo31	,
        fijo32	:	fijo32	,
        fijo33	:	fijo33	,
        fijo34	:	fijo34	,
        fijo35	:	fijo35	,
        fijo36	:	fijo36	,
        fijo37	:	fijo37	,
        fijo38	:	fijo38	,
        remov11	:	remov11	,
        remov12	:	remov12	,
        remov13	:	remov13	,
        remov14	:	remov14	,
        remov15	:	remov15	,
        remov16	:	remov16	,
        remov17	:	remov17	,
        remov18	:	remov18	,
        remov21	:	remov21	,
        remov22	:	remov22	,
        remov23	:	remov23	,
        remov24	:	remov24	,
        remov25	:	remov25	,
        remov26	:	remov26	,
        remov27	:	remov27	,
        remov28	:	remov28	,
        remov41	:	remov41	,
        remov42	:	remov42	,
        remov43	:	remov43	,
        remov44	:	remov44	,
        remov45	:	remov45	,
        remov46	:	remov46	,
        remov47	:	remov47	,
        remov48	:	remov48	,
        remov31	:	remov31	,
        remov32	:	remov32	,
        remov33	:	remov33	,
        remov34	:	remov34	,
        remov35	:	remov35	,
        remov36	:	remov36	,
        remov37	:	remov37	,
        remov38	:	remov38	,
        paciente: paciente
        };
      this.http
        .put<{ message: string }>('http://localhost:3000/api/reha/' + id, reha)
        .subscribe(response => {
          this.dialog.open(CompletoComponent, {data: {message:  response.message}});
        });
    }

  }

