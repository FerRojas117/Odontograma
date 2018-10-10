import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hojadetratamiento',
  templateUrl: './hojadetratamiento.component.html',
  styleUrls: ['./hojadetratamiento.component.css']
})
export class HojadetratamientoComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      noempleado: new FormControl(null, {validators: [Validators.required] }),
      organodental: new FormControl(null, {validators: [Validators.required] }),
      diagnostico: new FormControl(null, {validators: [Validators.required] }),
      tratamiento: new FormControl(null, {validators: [Validators.required] }),
      costo: new FormControl(null, {validators: [Validators.required] }),
      nopoliza: new FormControl(null, {validators: [Validators.required] }),
      
    });
  }

}
