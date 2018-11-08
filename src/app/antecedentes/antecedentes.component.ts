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

  ciruList: string[] = ['Hemorragias', 'Dolor prolongado', 'Cicatrización retardada', 'Alveolitis'];
  malestarList: string[] = ['Hemorragias', 'Dolores', 'Sabor desagradable', 'Fracturas', 'Trismus', 'Paresia', 'Parestesia', 'Otros'];
  hemorragiassList: string[] = ['Heridas pequeñas', 'Trauma leve ', 'Menstruación', 'Hematomas', 'Petequias', 'Esquimosis', 'Espitaxis'];
  alergicasList: string[] = ['Ninguna','Alimentos', 'Drogas', 'Anestésicos', 'Otros'];
  cavidadList: string[] = ['No hay anomalidad',
     'Pigmentación',    'Labios',
      'Carrillo y surco vestibular',
          'Lengua', 'Glánsulas salivares(Tamaño,Calidad y flujo de saliva,etc)',
    'Piso de boca', 'Paladar', 'Orofaringe', 'Encia'];
  higieneoList: string[] = ['Buena', 'Regualar', 'Mala', 'Halitosis', 'Placa', 'Materia Alba', 'Pigmentaciones'];
  calList: string[] = ['Ausentes', 'Reggulares', 'Abundantes', 'Supragingivales', 'Subgingivales'];

  constructor(
    public anteceService: AnteceService,
    public route: ActivatedRoute, // COPIAR
    private authService: AuthService, // COPIAR
    ) {}
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'cuantasRadio') { this.form.controls['cuandoRadio'].enable(); }
    if (componente === 'siReemplazoOrganos') {
      this.form.controls['porqueOrganos'].enable();
      this.form.controls['cuantosOrganos'].enable();
      this.form.controls['comoReemplazoOrganos'].enable();
      this.form.controls['cuanReemplazoOrganos'].enable();
    }
    if (componente === 'cuidadoHospital') {
      this.form.controls['cuidadoMedico'].enable();
      this.form.controls['cuidadoHistorial'].enable();
    }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();

    if (componente === 'cuantasRadio') { this.form.controls['cuandoRadio'].disable(); }
    if (componente === 'siReemplazoOrganos') {
      this.form.controls['porqueOrganos'].disable();
      this.form.controls['cuantosOrganos'].disable();
      this.form.controls['comoReemplazoOrganos'].disable();
      this.form.controls['cuanReemplazoOrganos'].disable();
  }
    if (componente === 'cuidadoHospital') {
      this.form.controls['cuidadoMedico'].disable();
      this.form.controls['cuidadoHistorial'].disable(); }
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
        cuanvisito: new FormControl(null),
        motivo: new FormControl(null),
        cdcuantiempo: new FormControl(null),
        radiografia: new FormControl(null),
        cuantasRadio  : new FormControl(null),
        cuandoRadio : new FormControl(null),
        organos: new FormControl(null),
        siReemplazoOrganos  : new FormControl(null),
        porqueOrganos : new FormControl(null),
        cuantosOrganos  : new FormControl(null),
        comoReemplazoOrganos  : new FormControl(null),
        cuanReemplazoOrganos  : new FormControl(null),
        cirugias: new FormControl(null), // array
        proanestesia: new FormControl(null),
        cualesProblemas : new FormControl(null),
        malestar: new FormControl(null), // array
        explique: new FormControl(null),
        cuidadoMedico : new FormControl(null),
        cuidadoHospital : new FormControl(null),
        medico : new FormControl(null),
        cuidadoHistorial  : new FormControl(null),
        vistmedult: new FormControl(null),
        paraque: new FormControl(null),
        drogas: new FormControl(null),
        cualesDrogas  : new FormControl(null),
        hemorragiass  : new FormControl(null), // array
        recalergicas : new FormControl(null), // array
        consmedica: new FormControl(null),
        consultaPorque  : new FormControl(null),
        cavidad: new FormControl(), // array
        higieneo : new FormControl(null), // array
        calculos: new FormControl(null), // array
        exploracionradiografica: new FormControl(null)
    });

      this.form.controls['cuantasRadio'].disable();
      this.form.controls['cuandoRadio'].disable();
      this.form.controls['siReemplazoOrganos'].disable();
      this.form.controls['porqueOrganos'].disable();
      this.form.controls['cuantosOrganos'].disable();
      this.form.controls['comoReemplazoOrganos'].disable();
      this.form.controls['cuanReemplazoOrganos'].disable();
      this.form.controls['cualesProblemas'].disable();
      this.form.controls['cuidadoHospital'].disable();
      this.form.controls['medico'].disable();
      this.form.controls['cuidadoHistorial'].disable();
      this.form.controls['cualesDrogas'].disable();
      this.form.controls['consultaPorque'].disable();


      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('id')) {
          this.mode = 'edit';
          this.idsId = paramMap.get('id');
          this.isLoading = true;
          this.anteceService.getAntece(this.idsId).subscribe(postData => {
            this.isLoading = false;
            this.idComponent = postData._id;
            this.antece = {
              id: postData._id,
              motivoconsulta: postData.motivoconsulta,
              cuanvisito: postData.cuanvisito,
              motivo: postData.motivo,
              cdcuantiempo: postData.cdcuantiempo,
              radiografia: postData.radiografia,
              cuantasRadio: postData.cuantasRadio,
              cuandoRadio: postData.cuandoRadio,
              organos: postData.organos,
              siReemplazoOrganos: postData.siReemplazoOrganos,
              porqueOrganos: postData.porqueOrganos,
              cuantosOrganos: postData.cuantosOrganos,
              comoReemplazoOrganos: postData.comoReemplazoOrganos,
              cuanReemplazoOrganos: postData.cuanReemplazoOrganos,
              cirugias: postData.cirugias, // array
              proanestesia: postData.proanestesia,
              cualesProblemas: postData.cualesProblemas,
              malestar: postData.malestar, // array
              explique: postData.explique,
              cuidadoMedico: postData.cuidadoMedico,
              cuidadoHospital: postData.cuidadoHospital,
              medico: postData.medico,
              cuidadoHistorial: postData.cuidadoHistorial,
              vistmedult: postData.vistmedult,
              paraque: postData.paraque,
              drogas: postData.drogas,
              cualesDrogas: postData.cualesDrogas,
              hemorragiass: postData.hemorragiass, // array
              recalergicas: postData.recalergicas, // array
              consmedica: postData.consmedica,
              consultaPorque: postData.consultaPorque,
              cavidad: postData.cavidad, // array
              higieneo: postData.higieneo, // array
              calculos: postData.calculos, // array
              exploracionradiografica: postData.exploracionradiografica,
              paciente: postData.paciente,
            };
            this.form.setValue({
              motivoconsulta: this.antece.motivoconsulta,
              cuanvisito: this.antece.cuanvisito,
              motivo: this.antece.motivo,
              cdcuantiempo: this.antece.cdcuantiempo,
              radiografia: this.antece.radiografia,
              cuantasRadio: this.antece.cuantasRadio,
              cuandoRadio: this.antece.cuandoRadio,
              organos: this.antece.organos,
              siReemplazoOrganos: this.antece.siReemplazoOrganos,
              porqueOrganos: this.antece.porqueOrganos,
              cuantosOrganos: this.antece.cuantosOrganos,
              comoReemplazoOrganos: this.antece.comoReemplazoOrganos,
              cuanReemplazoOrganos: this.antece.cuanReemplazoOrganos,
              cirugias: this.antece.cirugias, // array
              proanestesia: this.antece.proanestesia,
              cualesProblemas: this.antece.cualesProblemas,
              malestar: this.antece.malestar, // array
              explique: this.antece.explique,
              cuidadoMedico: this.antece.cuidadoMedico,
              cuidadoHospital: this.antece.cuidadoHospital,
              medico: this.antece.medico,
              cuidadoHistorial: this.antece.cuidadoHistorial,
              vistmedult: this.antece.vistmedult,
              paraque: this.antece.paraque,
              drogas: this.antece.drogas,
              cualesDrogas: this.antece.cualesDrogas,
              hemorragiass: this.antece.hemorragiass, // array
              recalergicas: this.antece.recalergicas, // array
              consmedica: this.antece.consmedica,
              consultaPorque: this.antece.consultaPorque,
              cavidad: this.antece.cavidad,// array
              higieneo: this.antece.higieneo, // array
              calculos:  this.antece.calculos,// array
              exploracionradiografica: this.antece.exploracionradiografica,
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
    if (this.form.invalid) {
      console.log('invalido');
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.anteceService.addAntece(
        this.form.value.motivoconsulta,
        this.form.value.cuanvisito,
        this.form.value.motivo,
        this.form.value.cdcuantiempo,
        this.form.value.radiografia,
        this.form.value.cuantasRadio,
        this.form.value.cuandoRadio,
        this.form.value.organos,
        this.form.value.siReemplazoOrganos,
        this.form.value.porqueOrganos,
        this.form.value.cuantosOrganos,
        this.form.value.comoReemplazoOrganos,
        this.form.value.cuanReemplazoOrganos,
        this.form.value.cirugias, // array
        this.form.value.proanestesia,
        this.form.value.cualesProblemas,
        this.form.value.malestar, // array
        this.form.value.explique,
        this.form.value.cuidadoMedico,
        this.form.value.cuidadoHospital,
        this.form.value.medico,
        this.form.value.cuidadoHistorial,
        this.form.value.vistmedult,
        this.form.value.paraque,
        this.form.value.drogas,
        this.form.value.cualesDrogas,
        this.form.value.hemorragiass, // array
        this.form.value.recalergicas, // array
        this.form.value.consmedica,
        this.form.value.consultaPorque,
        this.form.value.cavidad, // array
        this.form.value.higieneo, // array
        this.form.value.calculos, // array
        this.form.value.exploracionradiografica,
        this.idsId
      );
    } else {
        console.log(this.idComponent);
        this.anteceService.updateAntece(
        this.idComponent,
        this.form.value.motivoconsulta,
        this.form.value.cuanvisito,
        this.form.value.motivo,
        this.form.value.cdcuantiempo,
        this.form.value.radiografia,
        this.form.value.cuantasRadio,
        this.form.value.cuandoRadio,
        this.form.value.organos,
        this.form.value.siReemplazoOrganos,
        this.form.value.porqueOrganos,
        this.form.value.cuantosOrganos,
        this.form.value.comoReemplazoOrganos,
        this.form.value.cuanReemplazoOrganos,
        this.form.value.cirugias, // array
        this.form.value.proanestesia,
        this.form.value.cualesProblemas,
        this.form.value.malestar, // array
        this.form.value.explique,
        this.form.value.cuidadoMedico,
        this.form.value.cuidadoHospital,
        this.form.value.medico,
        this.form.value.cuidadoHistorial,
        this.form.value.vistmedult,
        this.form.value.paraque,
        this.form.value.drogas,
        this.form.value.cualesDrogas,
        this.form.value.hemorragiass, // array
        this.form.value.recalergicas, // array
        this.form.value.consmedica,
        this.form.value.consultaPorque,
        this.form.value.cavidad, // array
        this.form.value.higieneo, // array
        this.form.value.calculos, // array
        this.form.value.exploracionradiografica,
        this.idsId
      );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
