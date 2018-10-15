import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HojadeTratService } from './hojadetratamiento.service';

@Component({
  selector: 'app-hojadetratamiento',
  templateUrl: './hojadetratamiento.component.html',
  styleUrls: ['./hojadetratamiento.component.css']
})
export class HojadetratamientoComponent implements OnInit {
  form: FormGroup;
  constructor(public hojadeTratService: HojadeTratService) { }

  ngOnInit() {
    this.form = new FormGroup({
      noempleado: new FormControl(null, {validators: [Validators.required] }),
      organodental: new FormControl(null, {validators: [Validators.required] }),
      diagnostico: new FormControl(null, {validators: [Validators.required] }),
      tratamiento: new FormControl(null, {validators: [Validators.required] }),
      costo: new FormControl(null, {validators: [Validators.required] }),
      nopoliza: new FormControl(null, {validators: [Validators.required] }),
      paciente: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      alumno: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      profesorresponsable: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    });
  }
  addHojadeTrat() {
    this.hojadeTratService.addHojadeTrat(
      this.form.value.noempleado,
      this.form.value.organodental,
      this.form.value.diagnostico,
      this.form.value.tratamiento,
      this.form.value.costo,
      this.form.value.nopoliza,
      this.form.value.paciente,
      this.form.value.alumno,
      this.form.value.profesorresponsable,
    );
  }
}
