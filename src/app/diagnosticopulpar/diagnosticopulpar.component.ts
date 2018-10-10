import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-diagnosticopulpar',
  templateUrl: './diagnosticopulpar.component.html',
  styleUrls: ['./diagnosticopulpar.component.css']
})
export class DiagnosticopulparComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      organoa: new FormControl(null, {validators: [Validators.required] }),
      content: new FormControl(null, { validators: [Validators.required] }),
      tipodedolor: new FormControl(null, { validators: [Validators.required] }),
      episodios: new FormControl(null, { validators: [Validators.required] }),
      percusion: new FormControl(null, { validators: [Validators.required] }),
      movilidad: new FormControl(null, { validators: [Validators.required] }),
      cambiodecolor: new FormControl(null, { validators: [Validators.required] }),
      trumetaccion: new FormControl(null, { validators: [Validators.required] }),
      intra: new FormControl(null, { validators: [Validators.required] }),
      extra: new FormControl(null, { validators: [Validators.required] }),
      fisura: new FormControl(null, { validators: [Validators.required] }),
      reaccionpulpar: new FormControl(null, { validators: [Validators.required] }),
      testcavit: new FormControl(null, { validators: [Validators.required] }),
      observaciones: new FormControl(null, { validators: [Validators.required] }),
      organob: new FormControl(null, { validators: [Validators.required] }),
      caries: new FormControl(null, { validators: [Validators.required] }),
      trauma: new FormControl(null, { validators: [Validators.required] }),
      enfperiodonta: new FormControl(null, { validators: [Validators.required] }),
      obtdefectuosa: new FormControl(null, { validators: [Validators.required] }),
      fractura: new FormControl(null, { validators: [Validators.required] }),
      corona: new FormControl(null, { validators: [Validators.required] }),
      raiz: new FormControl(null, { validators: [Validators.required] }),
      otro: new FormControl(null, { validators: [Validators.required] }),
      otro2: new FormControl(null, { validators: [Validators.required] }),
      otro3: new FormControl(null, { validators: [Validators.required] }),
      organoc: new FormControl(null, { validators: [Validators.required] }),
      calcificaciones: new FormControl(null, { validators: [Validators.required] }),
      corona2: new FormControl(null, { validators: [Validators.required] }),
      raiz2: new FormControl(null, { validators: [Validators.required] }),
      resorcion: new FormControl(null, { validators: [Validators.required] }),
      interno: new FormControl(null, { validators: [Validators.required] }),
      externo: new FormControl(null, { validators: [Validators.required] }),
      refacciones: new FormControl(null, { validators: [Validators.required] }),
      penapico: new FormControl(null, { validators: [Validators.required] }),
      radicular: new FormControl(null, { validators: [Validators.required] }),
      obturaciondefectuosa2: new FormControl(null, { validators: [Validators.required] }),
      organodentario: new FormControl(null, { validators: [Validators.required] }),
      vital: new FormControl(null, { validators: [Validators.required] }),
      reversible: new FormControl(null, { validators: [Validators.required] }),
      irreversible: new FormControl(null, { validators: [Validators.required] }),
      novital: new FormControl(null, { validators: [Validators.required] }),
      aguda: new FormControl(null, { validators: [Validators.required] }),
      cronica: new FormControl(null, { validators: [Validators.required] }),
    });
  }

}
