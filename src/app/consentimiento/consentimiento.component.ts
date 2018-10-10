import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-consentimiento',
  templateUrl: './consentimiento.component.html',
  styleUrls: ['./consentimiento.component.css']
})

export class ConsentimientoComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      paciente: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      alumno: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      odontologo: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      nombre1: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      nombre2: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    });
  }

}
