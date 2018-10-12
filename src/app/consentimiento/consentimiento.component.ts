import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsenService } from './consentimiento.service';

@Component({
  selector: 'app-consentimiento',
  templateUrl: './consentimiento.component.html',
  styleUrls: ['./consentimiento.component.css']
})

export class ConsentimientoComponent implements OnInit {
  form: FormGroup;
  constructor(public consenService: ConsenService) { }

  ngOnInit() {
    this.form = new FormGroup({
      paciente: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      alumno: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      odontologo: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      nombre1: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      nombre2: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    });
  }
  addConsen() {
    this.consenService.addConsen(
      this.form.value.paciente,
      this.form.value.alumno,
      this.form.value.odontologo,
      this.form.value.nombre1,
      this.form.value.nombre2,
    );
  }
}
