import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RehaService } from './rehabilitacion.service';

@Component({
  selector: 'app-rehabilitacion',
  templateUrl: './rehabilitacion.component.html',
  styleUrls: ['./rehabilitacion.component.css']
})
export class RehabilitacionComponent implements OnInit {
    form: FormGroup;
  
    constructor(public rehaservice: RehaService) {}
  
    ngOnInit() {
      this.form = new FormGroup({
        referidoPor: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        motivoConsulta: new FormControl(null, { validators: [Validators.required] }),
        traumaDo: new FormControl(null, { validators: [Validators.required] }),
        estOdp: new FormControl(null, { validators: [Validators.required] }),
        estRdla: new FormControl(null, { validators: [Validators.required] }),
        irreEepo: new FormControl(null, { validators: [Validators.required] }),
        cieOpvc: new FormControl(null, { validators: [Validators.required] }),
      });
    }
    addReha() {
      this.rehaservice.addReha(
        this.form.value.referidoPor,
        this.form.value.motivoConsulta,
      );
    }
  }