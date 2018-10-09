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
    });
  }

}
