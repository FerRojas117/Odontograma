import { Component, OnInit, OnDestroy   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnteceService } from './antecedentes.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { Antece } from '../modelos/antecedentes.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR
@Component({
  selector: 'app-antecedentes',
  templateUrl: './antecedentes.component.html',
  styleUrls: ['./antecedentes.component.css']
})

export class AntecedentesComponent implements OnInit,  OnDestroy  {
  form: FormGroup;
  isLoading = false; // COPIAR
  private mode = 'create'; // COPIAR
  private idsId: string; // COPIAR
  private idComponent: string;
  private authStatusSub: Subscription; // COPIAR
  private idUpdated = new Subscription;
  idIdent: string;
  antece: Antece;
  ciru = new FormControl();
  ciruList: string[] = ['Hemorragias', 'Dolor prolongado', 'Cicatrización retardada', 'Alveolitis'];
  malestar = new FormControl();
  malestarList: string[] = ['Hemorragias', 'Dolores', 'Sabor desagradable', 'Fracturas', 'Trismus', 'Paresia', 'Parestesia', 'Otros'];
  hemorragiass = new FormControl();
  hemorragiassList: string[] = ['Heridas pequeñas', 'Trauma leve ', 'Menstruación', 'Hematomas', 'Petequias', 'Esquimosis', 'Espitaxis'];
  alergicas = new FormControl();
  alergicasList: string[] = ['Ninguna','Alimentos', 'Drogas', 'Anestésicos', 'Otros'];
  cavidad = new FormControl();
  cavidadList: string[] = ['No hay anomalidad',
     'Pigmentación',    'Labios',
      'Carrillo y surco vestibular',
          'Lengua', 'Glánsulas salivares(Tamaño,Calidad y flujo de saliva,etc)',
    'Piso de boca', 'Paladar', 'Orofaringe', 'Encia'];
  higieneo = new FormControl();
  higieneoList: string[] = ['Buena', 'Regualar', 'Mala', 'Halitosis', 'Placa', 'Materia Alba', 'Pigmentaciones'];
  cal = new FormControl();
  calList: string[] = ['Ausentes', 'Reggulares', 'Abundantes', 'Supragingivales', 'Subgingivales'];

  constructor(
    public anteceService: AnteceService,
    public route: ActivatedRoute, // COPIAR
    private authService: AuthService, // COPIAR
    ) {}
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'cuantasRadio') { this.form.controls['cuandoRadio'].enable(); }
    if (componente === 'siReemplazoOrganos') { this.form.controls['porqueOrganos'].enable(); this.form.controls['cuantosOrganos'].enable();
    this.form.controls['comoReemplazoOrganos'].enable(); this.form.controls['cuandoReemplazoOrganos'].enable(); }
    if (componente === 'cuidadoHospital') { this.form.controls['cuidadoMedico'].enable();this.form.controls['cuidadoHistorial'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();

    if (componente === 'cuantasRadio') { this.form.controls['cuandoRadio'].enable(); }
    if (componente === 'porqueOrganos') { this.form.controls['cuantosOrganos'].enable(); this.form.controls['siReemplazoOrganos'].enable();
    this.form.controls['comoReemplazoOrganos'].enable(); this.form.controls['cuandoReemplazoOrganos'].enable(); }
    if (componente === 'cuidadoHospital') { this.form.controls['cuidadoMedico'].enable();this.form.controls['cuidadoHistorial'].enable(); }
  }

  ngOnInit() {

 // COPIAR
 this.authStatusSub = this.authService
 .getAuthStatusListener()
 .subscribe(authStatus => {
   this.isLoading = false;
 });
 // COPIAR

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
      hospital: new FormControl(null, { validators: [Validators.required] }),
      vismedult: new FormControl(null, { validators: [Validators.required] }),
      paraque: new FormControl(null, { validators: [Validators.required] }),
      drogas: new FormControl(null, { validators: [Validators.required] }),
      cualesdr: new FormControl(null, { validators: [Validators.required] }),
      hemorragiass: new FormControl(null, { validators: [Validators.required] }),
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
      cuantasRadio  : new FormControl(null, { validators: [Validators.required] }),
      cuandoRadio : new FormControl(null, { validators: [Validators.required] }),
      cuantosOrganos  : new FormControl(null, { validators: [Validators.required] }),
      porqueOrganos : new FormControl(null, { validators: [Validators.required] }),
      siReemplazoOrganos  : new FormControl(null, { validators: [Validators.required] }),
      comoReemplazoOrganos  : new FormControl(null, { validators: [Validators.required] }),
      cuanReemplazoOrganos  : new FormControl(null, { validators: [Validators.required] }),
      cualesCirugias  : new FormControl(null, { validators: [Validators.required] }),
      problemasAnestesia  : new FormControl(null, { validators: [Validators.required] }),
      cualesProblemas : new FormControl(null, { validators: [Validators.required] }),
      cuidadoHospital : new FormControl(null, { validators: [Validators.required] }),
      cuidadoMedico : new FormControl(null, { validators: [Validators.required] }),
      cuidadoHistorial  : new FormControl(null, { validators: [Validators.required] }),
      cuidadoParaque  : new FormControl(null, { validators: [Validators.required] }),
      cualesDrogas  : new FormControl(null, { validators: [Validators.required] }),
      cualesHemorragias : new FormControl(null, { validators: [Validators.required] }),
      cualesAlergias  : new FormControl(null, { validators: [Validators.required] }),
      consultaPorque  : new FormControl(null, { validators: [Validators.required] }),
      recalergicas : new FormControl(null, { validators: [Validators.required] }),
      higieneo : new FormControl(null, { validators: [Validators.required] }),

    });
    this.form.controls['cuantasRadio'].disable();
      this.form.controls['cuandoRadio'].disable();
      this.form.controls['cuantosOrganos'].disable();
      this.form.controls['porqueOrganos'].disable();
      this.form.controls['siReemplazoOrganos'].disable();
      this.form.controls['comoReemplazoOrganos'].disable();
      this.form.controls['cuanReemplazoOrganos'].disable();
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
      this.form.controls['recalergicas'].disable();

      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('id')) {
          this.mode = 'edit';
          this.idsId = paramMap.get('id');
          this.isLoading = true;
          this.anteceService.getAntece(this.idsId).subscribe(postData => {
            this.isLoading = false;
            this.idComponent = postData._id;
            this.antece = {
              id:postData._id,
              motivoconsulta:postData.motivoconsulta,
              cuanvisito:postData.cuanvisito,
            vistmedult:postData.vistmedult,
            motivo:postData.motivo,
            cdcuantiempo:postData.cdcuantiempo,
            radiografias:postData.radiografias,
            radiografia:postData.radiografia,
            cuantascuando:postData.cuantascuando,
            orgdentarios:postData.orgdentarios,
            cuantosporque:postData.cuantosporque,
            remplazo:postData.remplazo,
            organos:postData.organos,
            comocuando:postData.comocuando,
            cirugias:postData.cirugias,
            malestar:postData.malestar,
            tipos:postData.tipos,
            proanestesia:postData.proanestesia,
            quetipo:postData.quetipo,
            higieneoral:postData.higieneoral,
            algvezhateni:postData.algvezhateni,
            explique:postData.explique,
            hospital:postData.hospital,
            vismedult:postData.vismedult,
            paraque:postData.paraque,
            drogas:postData.drogas,
            cualesdr:postData.cualesdr,
            hemorragiass:postData.hemorragiass,
            hsig:postData.hsig,
            reacalergicas:postData.reacalergicas,
            tipreac:postData.tipreac,
            cualesali:postData.cualesali,
            cualesd:postData.cualesd,
            cualesanes:postData.cualesanes,
            cualesotr:postData.cualesotr,
            consmedica:postData.consmedica,
            porque:postData.porque,
            obs:postData.obs,
            exploracion:postData.exploracion,
            deschigieneoral:postData.deschigieneoral,
            calculos:postData.calculos,
            exploracionradiografica:postData.exploracionradiografica,
            cuantasRadio:postData.cuantasRadio,
            cuandoRadio:postData.cuandoRadio,
            cuantosOrganos:postData.cuantosOrganos,
            porqueOrganos:postData.porqueOrganos,
            siReemplazoOrganos:postData.siReemplazoOrganos,
            comoReemplazoOrganos:postData.comoReemplazoOrganos,
            cuandoReemplazoOrganos:postData.cuandoReemplazoOrganos,
            cualesCirugias:postData.cualesCirugias,
            problemasAnestesia:postData.problemasAnestesia,
            cualesProblemas:postData.cualesProblemas,
            cuidadoHospital:postData.cuidadoHospital,
            cuidadoMedico:postData.cuidadoMedico,
            cuidadoHistorial:postData.cuidadoHistorial,
            cuidadoParaque:postData.cuidadoParaque,
            cualesDrogas:postData.cualesDrogas,
            cualesHemorragias:postData.cualesHemorragias,
            cualesAlergias:postData.cualesAlergias,
            consultaPorque:postData.consultaPorque,
            recalergicas:postData.recalergicas,
            paciente:postData.paciente,
            cavidad:postData.cavidad,
            higieneo:postData.higieneo
            };
            this.form.setValue({
              cuanvisito:this.antece.cuanvisito,
              vistmedult:this.antece.vistmedult,
              motivo:this.antece.motivo,
              motivoconsulta:this.antece.motivoconsulta,
              cdcuantiempo:this.antece.cdcuantiempo,
              radiografias:this.antece.radiografias,
              radiografia:this.antece.radiografia,
              cuantascuando:this.antece.cuantascuando,
              orgdentarios:this.antece.orgdentarios,
              cuantosporque:this.antece.cuantosporque,
              remplazo:this.antece.remplazo,
              organos:this.antece.organos,
              comocuando:this.antece.comocuando,
              cirugias:this.antece.cirugias,
              malestar:this.antece.malestar,
              tipos:this.antece.tipos,
              proanestesia:this.antece.proanestesia,
              quetipo:this.antece.quetipo,
              higieneoral:this.antece.higieneoral,
              algvezhateni:this.antece.algvezhateni,
              explique:this.antece.explique,
              hospital:this.antece.hospital,
              vismedult:this.antece.vismedult,
              paraque:this.antece.paraque,
              drogas:this.antece.drogas,
              cualesdr:this.antece.cualesdr,
              hemorragiass:this.antece.hemorragiass,
              hsig:this.antece.hsig,
              reacalergicas:this.antece.reacalergicas,
              tipreac:this.antece.tipreac,
              cualesali:this.antece.cualesali,
              cualesd:this.antece.cualesd,
              cualesanes:this.antece.cualesanes,
              cualesotr:this.antece.cualesotr,
              consmedica:this.antece.consmedica,
              porque:this.antece.porque,
              obs:this.antece.obs,
              exploracion:this.antece.exploracion,
              deschigieneoral:this.antece.deschigieneoral,
              calculos:this.antece.calculos,
              exploracionradiografica:this.antece.exploracionradiografica,
              cuantasRadio:this.antece.cuantasRadio,
              cuandoRadio:this.antece.cuandoRadio,
              cuantosOrganos:this.antece.cuantosOrganos,
              porqueOrganos:this.antece.porqueOrganos,
              siReemplazoOrganos:this.antece.siReemplazoOrganos,
              comoReemplazoOrganos:this.antece.comoReemplazoOrganos,
              cuandoReemplazoOrganos:this.antece.cuandoReemplazoOrganos,
              cualesCirugias:this.antece.cualesCirugias,
              problemasAnestesia:this.antece.problemasAnestesia,
              cualesProblemas:this.antece.cualesProblemas,
              cuidadoHospital:this.antece.cuidadoHospital,
              cuidadoMedico:this.antece.cuidadoMedico,
              cuidadoHistorial:this.antece.cuidadoHistorial,
              cuidadoParaque:this.antece.cuidadoParaque,
              cualesDrogas:this.antece.cualesDrogas,
              cualesHemorragias:this.antece.cualesHemorragias,
              cualesAlergias:this.antece.cualesAlergias,
              consultaPorque:this.antece.consultaPorque,
              recalergicas:this.antece.recalergicas,
              cavidad:this.antece.cavidad,
              higieneo:this.antece.higieneo
            });
          });
        } else {
          this.mode = 'create';
          this.idsId = localStorage.getItem('pacienteId');
          console.log(this.idsId);
        }
      });
  }

  addAntece() {
    console.log(this.idsId);

    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
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
      this.form.value.cirugias[0],
      this.form.value.malestar[0],
      this.form.value.cavidad[0],
      this.form.value.tipos,
      this.form.value.proanestesia,
      this.form.value.quetipo,
      this.form.value.higieneoral,
      this.form.value.algvezhateni,
      this.form.value.explique,
      this.form.value.hospital,
      this.form.value.vismedult,
      this.form.value.paraque,
      this.form.value.drogas,
      this.form.value.cualesdr,
      this.form.value.hemorragiass[0],
      this.form.value.hsig,
      this.form.value.reacalergicas[0],
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
      this.form.value.porqueOrganos ,
      this.form.value.cuantosOrganos,
      this.form.value.siReemplazoOrganos  ,
      this.form.value.comoReemplazoOrganos  ,
      this.form.value.cuandoReemplazoOrganos  ,
      this.form.value.cualesCirugias  ,
      this.form.value.problemasAnestesia  ,
      this.form.value.cualesProblemas ,
      this.form.value.cuidadoHospital ,
      this.form.value.cuidadoMedico ,
      this.form.value.cuidadoHistorial  ,
      this.form.value.cuidadoParaque  ,
      this.form.value.cualesDrogas  ,
      this.form.value.cualesHemorragias ,
      this.form.value.cualesAlergias  ,
      this.form.value.consultaPorque  ,
      this.form.value.organos,
      this.form.value.vistmedult,
      this.form.value.higieneo,
      this.form.value.recalergicas,
      this.idsId,

      );
    } else {
        console.log(this.idComponent);
        this.anteceService.updateAntece(
        this.idComponent,
        this.form.value.motivoconsulta,
        this.form.value.cuanvisito,
        this.form.value.vismedult,
        this.form.value.motivo,
        this.form.value.cdcuantiempo,
        this.form.value.radiografias,
        this.form.value.cuantascuando,
        this.form.value.orgdentarios,
        this.form.value.cuantosporque,
        this.form.value.remplazo,
        this.form.value.organos,
        this.form.value.comocuando,
        this.form.value.cirugias[0],
        this.form.value.malestar[0],
        this.form.value.cavidad[0],
        this.form.value.tipos,
        this.form.value.proanestesia,
        this.form.value.quetipo,
        this.form.value.higieneoral,
        this.form.value.algvezhateni,
        this.form.value.explique,
        this.form.value.hospital,
        this.form.value.vismedult,
        this.form.value.paraque,
        this.form.value.drogas,
        this.form.value.cualesdr,
        this.form.value.hemorragiass[0],
        this.form.value.hsig,
        this.form.value.reacalergicas[0],
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
        this.form.value.porqueOrganos ,
        this.form.value.cuantosOrganos,
        this.form.value.siReemplazoOrganos  ,
        this.form.value.comoReemplazoOrganos  ,
        this.form.value.cuandoReemplazoOrganos  ,
        this.form.value.cualesCirugias  ,
        this.form.value.problemasAnestesia  ,
        this.form.value.cualesProblemas ,
        this.form.value.cuidadoHospital ,
        this.form.value.cuidadoMedico ,
        this.form.value.cuidadoHistorial  ,
        this.form.value.cuidadoParaque  ,
        this.form.value.cualesDrogas  ,
        this.form.value.cualesHemorragias ,
        this.form.value.cualesAlergias  ,
        this.form.value.consultaPorque  ,
        this.form.value.organos,
        this.form.value.vistmedult,
        this.form.value.higieneo,
        this.form.value.recalergicas,
        this.idsId
            );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
