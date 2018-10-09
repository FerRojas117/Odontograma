import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentService } from './diagnosticopulpar.service';

@Component({
  selector: 'app-diagnosticopulpar',
  templateUrl: './diagnosticopulpar.component.html',
  styleUrls: ['./diagnosticopulpar.component.css']
})
export class DiagnosticopulparComponent implements OnInit {
  form: FormGroup;

  constructor(public identService: IdentService) {}

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      sexo: new FormControl(null, { validators: [Validators.required] }),
      edad: new FormControl(null, { validators: [Validators.required] }),
      estadoCivil: new FormControl(null, { validators: [Validators.required] }),
      direccion: new FormControl(null, { validators: [Validators.required] }),
      telefono: new FormControl(null, { validators: [Validators.required] }),
      ocupacion: new FormControl(null, { validators: [Validators.required] }),
      lNacimiento: new FormControl(null, { validators: [Validators.required] }),
      procedencia: new FormControl(null, { validators: [Validators.required] }),
      estadoSocioeconomico: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  addIdent() {
    this.identService.addIdent(
      this.form.value.nombre,
      this.form.value.sexo,
      this.form.value.edad,
      this.form.value.estadoCivil,
      this.form.value.direccion,
      this.form.value.telefono,
      this.form.value.ocupacion,
      this.form.value.lNacimiento,
      this.form.value.procedencia,
      this.form.value.estadoSocioeconomico,
    );
  }

}
