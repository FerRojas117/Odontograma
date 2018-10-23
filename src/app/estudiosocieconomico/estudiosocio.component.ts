import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstuService } from './estudiosocio.service';

@Component({
  selector: 'app-estudiosocio',
  templateUrl: './estudiosocio.component.html',
  styleUrls: ['./estudiosocio.component.css']
})
export class EstudiosocioComponent implements OnInit {
  form: FormGroup;
  ingresos = new FormControl();
  ingresosList: string[] = ['No tiene', 'Menor de $300', 'De $300 a $500', 'de $500 a $800', 'de $800 a $1200', 'de $1200 a $2400'];
  
  gradoinst = new FormControl();
  gradoinstList: string[] = ['Analfabeta', 'Primaria', 'Secundaria', 'Preparatoria', 'Profesional', 'Técnica'];
  constructor(public estuService: EstuService) {}

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      edad: new FormControl(null, { validators: [Validators.required] }),
      direccion: new FormControl(null, { validators: [Validators.required] }),
      tiemporadi: new FormControl(null, { validators: [Validators.required] }),
      fechnac: new FormControl(null, { validators: [Validators.required] }),
      telefono: new FormControl(null, { validators: [Validators.required] }),
      lugarDeNacimiento: new FormControl(null, { validators: [Validators.required] }),
      nacionalidad: new FormControl(null, { validators: [Validators.required] }),
      sexoN: new FormControl(null, { validators: [Validators.required] }),
      estadocivil: new FormControl(null, { validators: [Validators.required] }),
      ocupacion: new FormControl(null, { validators: [Validators.required] }),
      lugar: new FormControl(null, { validators: [Validators.required] }),
      direcc: new FormControl(null, { validators: [Validators.required] }),
      ingresos: new FormControl(null, { validators: [Validators.required] }),
      gradoinst: new FormControl(null, { validators: [Validators.required] }),
      numfam: new FormControl(null, { validators: [Validators.required] }),
      digsoci: new FormControl(null, { validators: [Validators.required] }),
      asigancion: new FormControl(null, { validators: [Validators.required] }),
      tutor: new FormControl(null, { validators: [Validators.required] }),
      obs: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  addEstu() {
    this.estuService.addEstu(
      this.form.value.nombre,
      this.form.value.edad,
      this.form.value.direccion,
      this.form.value.tiemporadi,
      this.form.value.fechnac,
      this.form.value.telefono,
      this.form.value.lugarDeNacimiento,
      this.form.value.nacionalidad,
      this.form.value.sexo,
      this.form.value.estadocivil,
      this.form.value.ocupacion,
      this.form.value.lugar,
      this.form.value.direcc,
      this.form.value.ingresos,
      this.form.value.gradoinst,
      this.form.value.numfam,
      this.form.value.digsoci,
      this.form.value.asigancion,
      this.form.value.tutor,
      this.form.value.obs,
    );
  }
}
