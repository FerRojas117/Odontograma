import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExploService } from './exploracionfisica.service';

@Component({
  selector: 'app-exploracionfisica',
  templateUrl: './exploracionfisica.component.html',
  styleUrls: ['./exploracionfisica.component.css']
})
export class ExploracionFisicaComponent implements OnInit {
    form: FormGroup;
  
    constructor(public exploservice: ExploService) {}
  
    ngOnInit() {
      this.form = new FormGroup({
        peso: new FormControl(null, { validators: [Validators.required] }),
        talla: new FormControl(null, { validators: [Validators.required] }),
        frecuenciaCardiaca: new FormControl(null, { validators: [Validators.required] }),
        presionArterial: new FormControl(null, { validators: [Validators.required] }),
        temperatura: new FormControl(null, { validators: [Validators.required] }),
        frecuenciaRespiratoria: new FormControl(null, { validators: [Validators.required] }),
        inspeccionGeneral: new FormControl(null, { validators: [Validators.required] }),
        cabeza: new FormControl(null, { validators: [Validators.required] }),
        cuello: new FormControl(null, { validators: [Validators.required] }),
        torax: new FormControl(null, { validators: [Validators.required] }),
        abdomen: new FormControl(null, { validators: [Validators.required] }),
        columnaVertebral: new FormControl(null, { validators: [Validators.required] }),
        extremidades: new FormControl(null, { validators: [Validators.required] }),
        diagnostico: new FormControl(null, { validators: [Validators.required] }),
        observaciones: new FormControl(null, { validators: [Validators.required] }),
        recomendaciones: new FormControl(null, { validators: [Validators.required] }),
        nombredelMedico: new FormControl(null, { validators: [Validators.required] }),
      });
    }
    addExplo() {
      this.exploservice.addExplo(
        this.form.value.peso,
        this.form.value.talla,
        this.form.value.frecuenciaCardiaca,
        this.form.value.presionArterial,
        this.form.value.temperatura,
        this.form.value.frecuenciaRespiratoria,
        this.form.value.inspeccionGeneral,
        this.form.value.cabeza,
        this.form.value.cuello,
        this.form.value.torax,
        this.form.value.abdomen,
        this.form.value.columnaVertebral,
        this.form.value.extremidades,
        this.form.value.diagnostico,
        this.form.value.observaciones,
        this.form.value.recomendaciones,
        this.form.value.nombredelMedico,
      );
    }
  }