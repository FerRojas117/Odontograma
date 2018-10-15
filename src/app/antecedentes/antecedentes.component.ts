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
  malestar = new FormControl();
  malestarList: string[] = ['Hemorragias', 'Dolores', 'Sabor desagradable', 'Fracturas', 'Trismus', 'Paresia', 'Parestesia', 'Otros'];
  cavidad = new FormControl();
  cavidadList: string[] = ['No hay anomalidad',
   'Pigmentación',
    'Labios', 'Carrillo y surco vestibular',
    'Lengua', 'Glánsulas salivares(Tamaño,Calidad y flujo de saliva,etc)',
    'Piso de boca', 'Paladar', 'Orofaringe', 'Encia'];
  higieneo = new FormControl();
  higieneoList: string[] = ['Buena', 'Regualar', 'Mala', 'Halitosis', 'Placa', 'Materia Alba', 'Pigmentaciones'];
  cal = new FormControl();
  calList: string[] = ['Ausentes', 'Reggulares', 'Abundantes', 'Supragingivales', 'Subgingivales'];

  constructor(public anteceService: AnteceService) {}

  ngOnInit() {
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
      comocuando: new FormControl(null, { validators: [Validators.required] }),
      cirugias: new FormControl(null, { validators: [Validators.required] }),
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
    });
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
    );
  }
}
