import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlandetratService } from './plandetratamiento.service';

@Component({
  selector: 'app-plandetratamiento',
  templateUrl: './plandetratamiento.component.html',
  styleUrls: ['./plandetratamiento.component.css']
})

export class PlandetratamientoComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      noempleado: new FormControl(null, {validators: [Validators.required] }),
    });

  constructor(public plandeTratamientoService: PlandetratService) { }

  ngOnInit() {
    this.form = new FormGroup({
    });
  }
  addPlandeTrat() {
    this.plandeTratamientoService.addPlandeTrat(
    );
  }
}
