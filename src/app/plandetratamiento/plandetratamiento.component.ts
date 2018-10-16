import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PlandeTratamiento } from '../modelos/plandetratamiento.model';
import { PlandetratService } from './plandetratamiento.service';

@Component({
  selector: 'app-plandetratamiento',
  templateUrl: './plandetratamiento.component.html',
  styleUrls: ['./plandetratamiento.component.css']
})

export class PlandetratamientoComponent implements OnInit {
  form: FormGroup;
  constructor(public plandeTratService: PlandetratService) { }

  ngOnInit() {
    this.form = new FormGroup({
      trabajo: new FormControl(null, {validators: [Validators.required] }),
      profesor: new FormControl(null, {validators: [Validators.required] }),
      cariadas: new FormControl(null, {validators: [Validators.required] }),
      perdidas: new FormControl(null, {validators: [Validators.required] }),
      obturadas: new FormControl(null, {validators: [Validators.required] }),
      extracciones: new FormControl(null, {validators: [Validators.required] }),
      indicadas: new FormControl(null, {validators: [Validators.required] }),
      nombre: new FormControl(null, {validators: [Validators.required] }),
      cuat: new FormControl(null, {validators: [Validators.required] }),
      equipo: new FormControl(null, {validators: [Validators.required] }),
      sillon: new FormControl(null, {validators: [Validators.required] }),
    });
  } 
  addPlandeTratamiento(){
    this.plandeTratService.addPlandeTratamiento(
      this.form.value.trabajo,
      this.form.value.profesor,
      this.form.value.cariadas,
      this.form.value.perdidas,
      this.form.value.obturadas,
      this.form.value.extracciones,
      this.form.value.indicadas,
      this.form.value.nombre,
      this.form.value.cuat,
      this.form.value.equipo,
      this.form.value.sillon,
    );
  }
}
