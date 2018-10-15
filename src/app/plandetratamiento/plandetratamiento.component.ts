import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { PlandetratService } from './plandetratamiento.service';
>>>>>>> 3c59602d9a702da33946c4d7582729260d7613ef

@Component({
  selector: 'app-plandetratamiento',
  templateUrl: './plandetratamiento.component.html',
  styleUrls: ['./plandetratamiento.component.css']
})

export class PlandetratamientoComponent implements OnInit {
  form: FormGroup;
<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      noempleado: new FormControl(null, {validators: [Validators.required] }),
    });
=======

  constructor(public plandeTratamientoService: PlandetratService) { }

  ngOnInit() {
    this.form = new FormGroup({
    });
  }
  addPlandeTrat() {
    this.plandeTratamientoService.addPlandeTrat(
    );
>>>>>>> 3c59602d9a702da33946c4d7582729260d7613ef
  }
}
