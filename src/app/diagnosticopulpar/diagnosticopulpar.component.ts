import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DiagnosticoService } from './diagnosticopulpar.service';

@Component({
  selector: 'app-diagnosticopulpar',
  templateUrl: './diagnosticopulpar.component.html',
  styleUrls: ['./diagnosticopulpar.component.css']
})
export class DiagnosticopulparComponent implements OnInit {
  form: FormGroup;
  constructor(public diagnosticoService: DiagnosticoService) { }

  ngOnInit() {
    this.form = new FormGroup({
      organoa: new FormControl(null, {validators: [Validators.required] }),
      tipodedolor: new FormControl(null, { validators: [Validators.required] }),
      episodios: new FormControl(null, { validators: [Validators.required] }),
      percusion: new FormControl(null, { validators: [Validators.required] }),
      movilidad: new FormControl(null, { validators: [Validators.required] }),
      cambiodecolor: new FormControl(null, { validators: [Validators.required] }),
      trumefaccionintra: new FormControl(null, { validators: [Validators.required] }),
      trumefaccionextra: new FormControl(null, { validators: [Validators.required] }),
      fistula: new FormControl(null, { validators: [Validators.required] }),
      reaccionpulparfrio: new FormControl(null, { validators: [Validators.required] }),
      reaccionpulparcalor: new FormControl(null, { validators: [Validators.required] }),
      reaccionpulpartestcavit: new FormControl(null, { validators: [Validators.required] }),
      observaciones: new FormControl(null, { validators: [Validators.required] }),
      organob: new FormControl(null, { validators: [Validators.required] }),
      caries: new FormControl(null, { validators: [Validators.required] }),
      trauma: new FormControl(null, { validators: [Validators.required] }),
      enfperiodonta: new FormControl(null, { validators: [Validators.required] }),
      obtdefectuosa: new FormControl(null, { validators: [Validators.required] }),
      fracturacorona: new FormControl(null, { validators: [Validators.required] }),
      fracturaraiz: new FormControl(null, { validators: [Validators.required] }),
      otro: new FormControl(null, { validators: [Validators.required] }),
      otro2: new FormControl(null, { validators: [Validators.required] }),
      otro3: new FormControl(null, { validators: [Validators.required] }),
      organoc: new FormControl(null, { validators: [Validators.required] }),
      calcificacionescorona2: new FormControl(null, { validators: [Validators.required] }),
      calcificacionesraiz2: new FormControl(null, { validators: [Validators.required] }),
      resorcioninterno: new FormControl(null, { validators: [Validators.required] }),
      resorcionexterno: new FormControl(null, { validators: [Validators.required] }),
      rarefaccionpenapico: new FormControl(null, { validators: [Validators.required] }),
      rarefaccionradicular: new FormControl(null, { validators: [Validators.required] }),
      obturaciondefectuosa2: new FormControl(null, { validators: [Validators.required] }),
      organodentario: new FormControl(null, { validators: [Validators.required] }),
      vitalreversible: new FormControl(null, { validators: [Validators.required] }),
      vitalirreversible: new FormControl(null, { validators: [Validators.required] }),
      novitalaguda: new FormControl(null, { validators: [Validators.required] }),
      novitalcronica: new FormControl(null, { validators: [Validators.required] }),
    });
  }
  addDiagnostico() {
    this.diagnosticoService.addDiagnostico(
      this.form.value.organoa,
      this.form.value.tipodedolor		,
      this.form.value.episodios		,
      this.form.value.percusion		,
      this.form.value.movilidad		,
      this.form.value.cambiodecolor		,
      this.form.value.trumefaccionintra		,
      this.form.value.trumefaccionextra		,
      this.form.value.fistula		,
      this.form.value.reaccionpulparcalor,
      this.form.value.reaccionpulparfrio,
      this.form.value.reaccionpulpartestcavit,
      this.form.value.	    observaciones		,
      this.form.value.	    organob		,
      this.form.value.	    caries		,
      this.form.value.	    trauma		,
      this.form.value.	    enfperiodonta		,
      this.form.value.	    obtdefectuosa		,
      this.form.value.	    fracturacorona		,
      this.form.value.	    fracturaraiz		,
      this.form.value.	    otro		,
      this.form.value.	    otro2		,
      this.form.value.	    otro3		,
      this.form.value.	    organoc		,
      this.form.value.calcificacionescorona2		,
      this.form.value.calcificacionesraiz2		,
      this.form.value.	    resorcioninterno		,
      this.form.value.	    resorcionexterno		,
      this.form.value.	    rarefaccionpenapico		,
      this.form.value.	    rarefaccionradicular		,
      this.form.value.	    obturaciondefectuosa2		,
      this.form.value.	    organodentario		,
      this.form.value.	    vitalreversible		,
      this.form.value.	    vitalirreversible		,
      this.form.value.	    novitalaguda		,
      this.form.value.	    novitalcronica,
    );
  }
}
