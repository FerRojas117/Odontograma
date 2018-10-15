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
      noempleado: new FormControl(null, {validators: [Validators.required] }),
    });
  } 
  addPlandeTratamiento(){
    this.plandeTratService.addPlandeTratamiento(
      this.form.value.noempleado,
    );
  }
}
