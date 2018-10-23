import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnteceService } from './antecedentes.service';

@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.css']
})

export class AntecedentesComponent implements OnInit {
  form: FormGroup;
  radiografias_dis = false;
  orgdent_dis= false;
  remplazo_dis= false;
  proanes_dis= false;
  cuidadom_dis= false;
  drogas_dis= false;
  alergias_dis= false;
  consulta_dis= false;
  ciru = new FormControl();
  ciruList: string[] = ['Hemorragias', 'Dolor prolongado', 'Cicatrización retardada', 'Alveolitis'];
  malestar = new FormControl();
  malestarList: string[] = ['Hemorragias', 'Dolores', 'Sabor desagradable', 'Fracturas', 'Trismus', 'Paresia', 'Parestesia', 'Otros'];
  hemorragiass = new FormControl();
  hemorragiassList: string[] = ['Heridas pequeñas', 'Trauma leve ', 'Menstruación', 'Hematomas', 'Petequias', 'Esquimosis', 'Espitaxis'];
  alergicas = new FormControl();
  alergicasList: string[] = ['Ninguna','Alimentos', 'Drogas', 'Anestésicos', 'Otros'];
  cavidad = new FormControl();
  cavidadList: string[] = ['No hay anomalidad',   'Pigmentación',    'Labios', 'Carrillo y surco vestibular',    'Lengua', 'Glánsulas salivares(Tamaño,Calidad y flujo de saliva,etc)',
    'Piso de boca', 'Paladar', 'Orofaringe', 'Encia'];
  higieneo = new FormControl();
  higieneoList: string[] = ['Buena', 'Regualar', 'Mala', 'Halitosis', 'Placa', 'Materia Alba', 'Pigmentaciones'];
  cal = new FormControl();
  calList: string[] = ['Ausentes', 'Reggulares', 'Abundantes', 'Supragingivales', 'Subgingivales'];

  constructor(public anteceService: AnteceService) {}
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'cuandoDiabetes') { this.form.controls['glucosa'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'cuandoDiabetes') { this.form.controls['glucosa'].disable(); }
  }
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'cuantasRadio') { this.form.controls['cuandoRadio'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'cuantasRadio') { this.form.controls['cuandoRadio'].disable(); }
  }
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'porqueOrganos') { this.form.controls['cuantosOrganos'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'porqueOrganos') { this.form.controls['cuantosOrganos'].disable(); }
  }
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'porqueOrganos') { this.form.controls['siReemplazoOrganos'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'porqueOrganos') { this.form.controls['siReemplazoOrganos'].disable(); }
  }
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'porqueOrganos') { this.form.controls['comoReemplazoOrganos'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'porqueOrganos') { this.form.controls['comoReemplazoOrganos'].disable(); }
  }
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'porqueOrganos') { this.form.controls['cuandoReemplazoOrganos'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'porqueOrganos') { this.form.controls['cuandoReemplazoOrganos'].disable(); }
  }
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'cuidadoHospital') { this.form.controls['cuidadoMedico'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'cuidadoHospital') { this.form.controls['cuidadoMedico'].disable(); }
  }

  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'cuidadoHospital') { this.form.controls['cuidadoHistorial'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'cuidadoHospital') { this.form.controls['cuidadoHistorial'].disable(); }
  }






  ngOnInit() {
   this.radiografias_dis = false;
  this.orgdent_dis= false;
  this.remplazo_dis= false;
  this.proanes_dis= false;
  this.cuidadom_dis= false;
  this.drogas_dis= false;
  this.alergias_dis= false;
  this.consulta_dis= false;
    this.form = new FormGroup({
      motivoconsulta: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      cuanvisito: new FormControl(null, { validators: [Validators.required] }),
      vistmedult: new FormControl(null, { validators: [Validators.required] }),
      motivo: new FormControl(null, { validators: [Validators.required] }),
      cdcuantiempo: new FormControl(null, { validators: [Validators.required] }),
      radiografias: new FormControl(null, { validators: [Validators.required] }),
      radiografia: new FormControl(null, { validators: [Validators.required] }),
      cuantascuando: new FormControl(null, { validators: [Validators.required] }),
      orgdentarios: new FormControl(null, { validators: [Validators.required] }),
      cuantosporque: new FormControl(null, { validators: [Validators.required] }),
      remplazo: new FormControl(null, { validators: [Validators.required] }),
      organos: new FormControl(null, { validators: [Validators.required] }),
      comocuando: new FormControl(null, { validators: [Validators.required] }),
      cirugias: new FormControl(null, { validators: [Validators.required] }),
      malestar: new FormControl(null, { validators: [Validators.required] }),
      tipos: new FormControl(null, { validators: [Validators.required] }),
      proanestesia: new FormControl(null, { validators: [Validators.required] }),
      quetipo: new FormControl(null, { validators: [Validators.required] }),
      higieneoral: new FormControl(null, { validators: [Validators.required] }),
      algvezhateni: new FormControl(null, { validators: [Validators.required] }),
      explique: new FormControl(null, { validators: [Validators.required] }),
      cuidadomedico: new FormControl(null, { validators: [Validators.required] }),
      hospital: new FormControl(null, { validators: [Validators.required] }),
      vismedult: new FormControl(null, { validators: [Validators.required] }),
      paraque: new FormControl(null, { validators: [Validators.required] }),
      drogas: new FormControl(null, { validators: [Validators.required] }),
      cualesdr: new FormControl(null, { validators: [Validators.required] }),
      hemorragias: new FormControl(null, { validators: [Validators.required] }),
      hsig: new FormControl(null, { validators: [Validators.required] }),
      reacalergicas: new FormControl(null, { validators: [Validators.required] }),
      tipreac: new FormControl(null, { validators: [Validators.required] }),
      cualesali: new FormControl(null, { validators: [Validators.required] }),
      cualesd: new FormControl(null, { validators: [Validators.required] }),
      cualesanes: new FormControl(null, { validators: [Validators.required] }),
      cualesotr: new FormControl(null, { validators: [Validators.required] }),
      consmedica: new FormControl(null, { validators: [Validators.required] }),
      porque: new FormControl(null, { validators: [Validators.required] }),
      obs: new FormControl(null, { validators: [Validators.required] }),
      exploracion: new FormControl(null, { validators: [Validators.required] }),
      deschigieneoral: new FormControl(null, { validators: [Validators.required] }),
      calculos: new FormControl(null, { validators: [Validators.required] }),
      exploracionradiografica: new FormControl(null, { validators: [Validators.required] }),
      cuantasRadio	: new FormControl(null, { validators: [Validators.required] }),
      cuandoRadio	: new FormControl(null, { validators: [Validators.required] }),
      cuantosOrganos	: new FormControl(null, { validators: [Validators.required] }),
      porqueOrganos	: new FormControl(null, { validators: [Validators.required] }),
      siReemplazoOrganos	: new FormControl(null, { validators: [Validators.required] }),
      comoReemplazoOrganos	: new FormControl(null, { validators: [Validators.required] }),
      cuandoReemplazoOrganos	: new FormControl(null, { validators: [Validators.required] }),
      cualesCirugias	: new FormControl(null, { validators: [Validators.required] }),
      problemasAnestesia	: new FormControl(null, { validators: [Validators.required] }),
      cualesProblemas	: new FormControl(null, { validators: [Validators.required] }),
      cuidadoHospital	: new FormControl(null, { validators: [Validators.required] }),
      cuidadoMedico	: new FormControl(null, { validators: [Validators.required] }),
      cuidadoHistorial	: new FormControl(null, { validators: [Validators.required] }),
      cuidadoParaque	: new FormControl(null, { validators: [Validators.required] }),
      cualesDrogas	: new FormControl(null, { validators: [Validators.required] }),
      cualesHemorragias	: new FormControl(null, { validators: [Validators.required] }),
      cualesAlergias	: new FormControl(null, { validators: [Validators.required] }),
      consultaPorque	: new FormControl(null, { validators: [Validators.required] }),

    });
    this.form.controls['cuantasRadio'].disable();
      this.form.controls['cuandoRadio'].disable();
      this.form.controls['cuantosOrganos'].disable();
      this.form.controls['porqueOrganos'].disable();
      this.form.controls['siReemplazoOrganos'].disable();
      this.form.controls['comoReemplazoOrganos'].disable();
      this.form.controls['cuandoReemplazoOrganos'].disable();
      this.form.controls['cualesCirugias'].disable();
      this.form.controls['problemasAnestesia'].disable();
      this.form.controls['cualesProblemas'].disable();
      this.form.controls['cuidadoHospital'].disable();
      this.form.controls['cuidadoMedico'].disable();
      this.form.controls['cuidadoHistorial'].disable();
      this.form.controls['cuidadoParaque'].disable();
      this.form.controls['cualesDrogas'].disable();
      this.form.controls['cualesAlergias'].disable();
      this.form.controls['cualesHemorragias'].disable();
      this.form.controls['consultaPorque'].disable();
  }

  addAntece() {
    this.anteceService.addAntece(
      this.form.value.motivoconsulta,
      this.form.value.cuanvisito,
      this.form.value.motivo,
      this.form.value.cdcuantiempo,
      this.form.value.radiografias,
      this.form.value.cuantascuando,
      this.form.value.orgdentarios,
      this.form.value.cuantosporque,
      this.form.value.remplazo,
      this.form.value.comocuando,
      this.form.value.cirugias,
      this.form.value.tipos,
      this.form.value.proanestesia,
      this.form.value.quetipo,
      this.form.value.higieneoral,
      this.form.value.algvezhateni,
      this.form.value.explique,
      this.form.value.cuidadomedico,
      this.form.value.hospital,
      this.form.value.vismedult,
      this.form.value.paraque,
      this.form.value.drogas,
      this.form.value.cualesdr,
      this.form.value.hemorragias,
      this.form.value.hsig,
      this.form.value.reacalergicas,
      this.form.value.tipreac,
      this.form.value.cualesali,
      this.form.value.cualesd,
      this.form.value.cualesanes,
      this.form.value.cualesotr,
      this.form.value.consmedica,
      this.form.value.porque,
      this.form.value.obs,
      this.form.value.exploracion,
      this.form.value.deschigieneoral,
      this.form.value.calculos,
      this.form.value.exploracionradiografica,
      this.form.value.porqueOrganos	,
      this.form.value.siReemplazoOrganos	,
      this.form.value.comoReemplazoOrganos	,
      this.form.value.cuandoReemplazoOrganos	,
      this.form.value.cualesCirugias	,
      this.form.value.problemasAnestesia	,
      this.form.value.cualesProblemas	,
      this.form.value.cuidadoHospital	,
      this.form.value.cuidadoMedico	,
      this.form.value.cuidadoHistorial	,
      this.form.value.cuidadoParaque	,
      this.form.value.cualesDrogas	,
      this.form.value.cualesHemorragias	,
      this.form.value.cualesAlergias	,
      this.form.value.consultaPorque	,
      this.form.value.organos,

    );
  }
}
