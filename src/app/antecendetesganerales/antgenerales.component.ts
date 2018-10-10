import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AntGService } from './antgenerales.service';

@Component({
  selector: 'app-antecedentesgenerales',
  templateUrl: './antgenerales.component.html',
  styleUrls: ['./antgenerales.component.css']
})
export class AntgeneralesComponent implements OnInit {
  form: FormGroup;

  constructor(public antgeService: AntGService) {}

  ngOnInit() {
    this.form = new FormGroup({
      anthereditarios: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      religion: new FormControl(null, { validators: [Validators.required] }),
      tiprelsex: new FormControl(null, { validators: [Validators.required] }),
      parejas: new FormControl(null, { validators: [Validators.required] }),
      calalim: new FormControl(null, { validators: [Validators.required] }),
      higpers: new FormControl(null, { validators: [Validators.required] }),
      sedentarismo: new FormControl(null, { validators: [Validators.required] }),
      calhabit: new FormControl(null, { validators: [Validators.required] }),
      perspat: new FormControl(null, { validators: [Validators.required] }),
      ginecoobst: new FormControl(null, { validators: [Validators.required] }),
      edades: new FormControl(null, { validators: [Validators.required] }),
      planifami: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  addIdent() {
    this.antgeService.addAntG(
      this.form.value.anthereditarios,
      this.form.value.religion,
      this.form.value.tiprelsex,
      this.form.value.parejas,
      this.form.value.calalim,
      this.form.value.higpers,
      this.form.value.sedentarismo,
      this.form.value.calhabit,
      this.form.value.perspat,
      this.form.value.ginecoobst,
      this.form.value.edades,
      this.form.value.planifami,
    );
  }
}
