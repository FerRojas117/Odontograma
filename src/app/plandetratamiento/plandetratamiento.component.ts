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
    examenDental = new FormControl();
    options: string[] = ['C', 'P', 'O', 'E', 'I'];

  ngOnInit() {
    this.form = new FormGroup({
      fechaTrab: new FormControl((new Date()).toISOString(), { validators: [Validators.required] }),
      trabajo: new FormControl(null, {validators: [Validators.required] }),
      profesor: new FormControl(null, {validators: [Validators.required] }),
      cariadas: new FormControl(null, {validators: [Validators.required] }),
      perdidas: new FormControl(null, {validators: [Validators.required] }),
      obturadas: new FormControl(null, {validators: [Validators.required] }),
      extracciones: new FormControl(null, {validators: [Validators.required] }),
      indicadas: new FormControl(null, {validators: [Validators.required] }),
      cariadastem: new FormControl(null, {validators: [Validators.required] }),
      perdidastem: new FormControl(null, {validators: [Validators.required] }),
      obturadastem: new FormControl(null, {validators: [Validators.required] }),
      extraccionestem: new FormControl(null, {validators: [Validators.required] }),
      indicadastem: new FormControl(null, {validators: [Validators.required] }),
      nombre: new FormControl(null, {validators: [Validators.required] }),
      cuat: new FormControl(null, {validators: [Validators.required] }),
      equipo: new FormControl(null, {validators: [Validators.required] }),
      sillon: new FormControl(null, {validators: [Validators.required] }),
      nombreaux: new FormControl(null, {validators: [Validators.required] }),
      cuataux: new FormControl(null, {validators: [Validators.required] }),
      equipoaux: new FormControl(null, {validators: [Validators.required] }),
      sillonaux: new FormControl(null, {validators: [Validators.required] }),
    });
  } 

  addPlandeTratamiento(){
    this.plandeTratService.addPlandeTratamiento(
      this.form.value.trabajo,
      this.form.value.fechaTrab,
      this.form.value.profesor,
      this.form.value.cariadas,
      this.form.value.perdidas,
      this.form.value.obturadas,
      this.form.value.extracciones,
      this.form.value.indicadas,
      this.form.value.cariadastem,
      this.form.value.perdidastem,
      this.form.value.obturadastem,
      this.form.value.extraccionestem,
      this.form.value.indicadastem,
      this.form.value.nombre,
      this.form.value.cuat,
      this.form.value.equipo,
      this.form.value.sillon,
      this.form.value.nombreaux,
      this.form.value.cuataux,
      this.form.value.equipoaux,
      this.form.value.sillonaux,
    );
  }
}
