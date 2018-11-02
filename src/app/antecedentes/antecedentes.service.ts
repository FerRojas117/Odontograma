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
    radiografias: string,
    cuantascuando: string,
    orgdentarios: string,
    cuantosporque: string,
    remplazo: string,
    comocuando: string,
    cirugias: string,
    tipos: string,
    proanestesia: string,
    quetipo: string,
    higieneoral: string,
    algvezhateni: string,
    explique: string,
    hospital: string,
    vismedult: string,
    paraque: string,
    drogas: string,
    cualesdr: string,
    hemorragiass: string,
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
    porqueOrganos :string,
    siReemplazoOrganos  :string,
    comoReemplazoOrganos  :string,
    cuandoReemplazoOrganos  :string,
    cualesCirugias  :string,
    problemasAnestesia  :string,
    cualesProblemas :string,
    cuidadoHospital :string,
    cuidadoMedico :string,
    cuidadoHistorial  :string,
    cuidadoParaque  :string,
    cualesDrogas  :string,
    cualesHemorragias :string,
    cualesAlergias  :string,
    consultaPorque  :string,
    organos:string,
    cuantosOrganos:string,
    vistmedult:string,
    malestar:string,
    cavidad:string,
    higieneo:string,
    recalergicas:string,
    paciente: string,
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
      proanestesia: proanestesia,
      quetipo: quetipo,
      higieneoral: higieneoral,
      algvezhateni: algvezhateni,
      explique: explique,
      hospital: hospital,
      vismedult: vismedult,
      paraque: paraque,
      drogas: drogas,
      cualesdr: cualesdr,
      hemorragiass: hemorragiass,
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
      porqueOrganos : porqueOrganos ,
      siReemplazoOrganos  : siReemplazoOrganos  ,
      comoReemplazoOrganos  : comoReemplazoOrganos  ,
      cuandoReemplazoOrganos  : cuandoReemplazoOrganos  ,
      cualesCirugias  : cualesCirugias  ,
      problemasAnestesia  : problemasAnestesia  ,
      cualesProblemas : cualesProblemas ,
      cuidadoHospital : cuidadoHospital ,
      cuidadoMedico : cuidadoMedico ,
      cuidadoHistorial  : cuidadoHistorial  ,
      cuidadoParaque  : cuidadoParaque  ,
      cualesDrogas  : cualesDrogas  ,
      cualesHemorragias : cualesHemorragias ,
      cualesAlergias  : cualesAlergias  ,
      consultaPorque  : consultaPorque  ,
      organos:organos,
      cuantosOrganos:cuantosOrganos,
      vistmedult:vistmedult,
      malestar:malestar,
      cavidad:cavidad,
      higieneo:higieneo,
      recalergicas:recalergicas,
      paciente:paciente
    };
    console.log(registrarAntece);
    this.http
      .post<{ _id: string }>('http://localhost:3000/api/antEstoma', registrarAntece)
      .subscribe(responseData => {
        this.id = responseData._id;
      });
  }
  getAntece(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
      motivoconsulta:string;
      cuanvisito	:string;
vistmedult	:string;
motivo	:string;
cdcuantiempo	:string;
radiografias	:string;
radiografia	:string;
cuantascuando	:string;
orgdentarios	:string;
cuantosporque	:string;
remplazo	:string;
organos	:string;
comocuando	:string;
cirugias	:string;
malestar	:string;
tipos	:string;
proanestesia	:string;
quetipo	:string;
higieneoral	:string;
algvezhateni	:string;
explique	:string;
hospital	:string;
vismedult	:string;
paraque	:string;
drogas	:string;
cualesdr	:string;
hemorragiass	:string;
hsig	:string;
reacalergicas	:string;
tipreac	:string;
cualesali	:string;
cualesd	:string;
cualesanes	:string;
cualesotr	:string;
consmedica	:string;
porque	:string;
obs	:string;
exploracion	:string;
deschigieneoral	:string;
calculos	:string;
exploracionradiografica	:string;
cuantasRadio	:string;
cuandoRadio	:string;
cuantosOrganos	:string;
porqueOrganos	:string;
siReemplazoOrganos	:string;
comoReemplazoOrganos	:string;
cuandoReemplazoOrganos	:string;
cualesCirugias	:string;
problemasAnestesia	:string;
cualesProblemas	:string;
cuidadoHospital	:string;
cuidadoMedico	:string;
cuidadoHistorial	:string;
cuidadoParaque	:string;
cualesDrogas	:string;
cualesHemorragias	:string;
cualesAlergias	:string;
consultaPorque	:string;
recalergicas	:string;
paciente: string;
higieneo:string;
cavidad:string;
    }>('http://localhost:3000/api/antEstoma/' + id);
  }
  updateAntece(
    motivoconsulta:string,
    id: string,
    cuanvisito	:string,
vistmedult	:string,
motivo	:string,
cdcuantiempo	:string,
radiografias	:string,
radiografia	:string,
cuantascuando	:string,
orgdentarios	:string,
cuantosporque	:string,
remplazo	:string,
organos	:string,
comocuando	:string,
cirugias	:string,
malestar	:string,
tipos	:string,
proanestesia	:string,
quetipo	:string,
higieneoral	:string,
algvezhateni	:string,
explique	:string,
hospital	:string,
vismedult	:string,
paraque	:string,
drogas	:string,
cualesdr	:string,
hemorragiass	:string,
hsig	:string,
reacalergicas	:string,
tipreac	:string,
cualesali	:string,
cualesd	:string,
cualesanes	:string,
cualesotr	:string,
consmedica	:string,
porque	:string,
obs	:string,
exploracion	:string,
deschigieneoral	:string,
calculos	:string,
exploracionradiografica	:string,
cuantasRadio	:string,
cuandoRadio	:string,
cuantosOrganos	:string,
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
recalergicas	:string,
paciente:string,
higieneo:string,
cavidad:string,
  ) {
    let antece: Antece;
    antece = {
      motivoconsulta:motivoconsulta,
      id: id,
      cuanvisito	:	cuanvisito	,
      vistmedult	:	vistmedult	,
      motivo	:	motivo	,
      cdcuantiempo	:	cdcuantiempo	,
      radiografias	:	radiografias	,
      radiografia	:	radiografia	,
      cuantascuando	:	cuantascuando	,
      orgdentarios	:	orgdentarios	,
      cuantosporque	:	cuantosporque	,
      remplazo	:	remplazo	,
      organos	:	organos	,
      comocuando	:	comocuando	,
      cirugias	:	cirugias	,
      malestar	:	malestar	,
      tipos	:	tipos	,
      proanestesia	:	proanestesia	,
      quetipo	:	quetipo	,
      higieneoral	:	higieneoral	,
      algvezhateni	:	algvezhateni	,
      explique	:	explique	,
      hospital	:	hospital	,
      vismedult	:	vismedult	,
      paraque	:	paraque	,
      drogas	:	drogas	,
      cualesdr	:	cualesdr	,
      hemorragiass	:	hemorragiass	,
      hsig	:	hsig	,
      reacalergicas	:	reacalergicas	,
      tipreac	:	tipreac	,
      cualesali	:	cualesali	,
      cualesd	:	cualesd	,
      cualesanes	:	cualesanes	,
      cualesotr	:	cualesotr	,
      consmedica	:	consmedica	,
      porque	:	porque	,
      obs	:	obs	,
      exploracion	:	exploracion	,
      deschigieneoral	:	deschigieneoral	,
      calculos	:	calculos	,
      exploracionradiografica	:	exploracionradiografica	,
      cuantasRadio	:	cuantasRadio	,
      cuandoRadio	:	cuandoRadio	,
      cuantosOrganos	:	cuantosOrganos	,
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
      recalergicas	:	recalergicas	,
      paciente:paciente,
      higieneo:higieneo,
      cavidad:cavidad,
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/exploFisica/' + id, 
      antece)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
