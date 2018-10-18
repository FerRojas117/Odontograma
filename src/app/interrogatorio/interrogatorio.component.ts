import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterService } from './interrogatorio.service';

@Component({
  selector: 'app-interrogatorio',
  templateUrl: './interrogatorio.component.html',
  styleUrls: ['./interrogatorio.component.css']
})

export class InterrogatorioComponent implements OnInit {
    form: FormGroup;
    cardio_dis = false;
    otros_dis = true;
    diabetes_dis = false;
    hepatitis_dis = false;

 constructor(public interService: InterService) {}
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'cuandoDiabetes') { this.form.controls['glucosa'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'cuandoDiabetes') { this.form.controls['glucosa'].disable(); }
  }


    ngOnInit() {
      this.hepatitis_dis = false;
      this.diabetes_dis = false;
      this.otros_dis = false;

      this.form = new FormGroup({
          presionArterial	: new FormControl(null, { validators: [Validators.required] }),
          aparatoRespiratorio	: new FormControl(null, { validators: [Validators.required] }),
          aparatoDigestivo	: new FormControl(null, { validators: [Validators.required] }),
          fiebreReumatica	: new FormControl(null, { validators: [Validators.required] }),
          hemorragias	: new FormControl(null, { validators: [Validators.required] }),
          anemia	: new FormControl(null, { validators: [Validators.required] }),
          infarto	: new FormControl(null, { validators: [Validators.required] }),
          otros	: new FormControl(null, { validators: [Validators.required] }),
          cualesOtros	: new FormControl(null),
          tuberculosis	: new FormControl(null, { validators: [Validators.required] }),
          neumonia	: new FormControl(null, { validators: [Validators.required] }),
          hasma	: new FormControl(null, { validators: [Validators.required] }),
          faringeamigdalitis	: new FormControl(null, { validators: [Validators.required] }),
          bronquitis	: new FormControl(null, { validators: [Validators.required] }),
          gastritis	: new FormControl(null, { validators: [Validators.required] }),
          colitis	: new FormControl(null, { validators: [Validators.required] }),
          gastroenteritis	: new FormControl(null, { validators: [Validators.required] }),
          hepatitis	: new FormControl(null, { validators: [Validators.required] }),
          cuandoHepatitis	: new FormControl(null),
          diabetes	: new FormControl(null, { validators: [Validators.required] }),
          cuandoDiabetes	: new FormControl(null),
          glucosa	: new FormControl(null),
      });
      this.form.controls['cualesOtros'].disable();
      this.form.controls['cuandoHepatitis'].disable();
      this.form.controls['cuandoDiabetes'].disable();
      this.form.controls['glucosa'].disable();
    }
    addInter() {
      this.interService.addInter(
      this.form.value.presionArterial,
      this.form.value.fiebreReumatica,
      this.form.value.hemorragias	,
      this.form.value.anemia	,
      this.form.value.infarto	,
      this.form.value.otros	,
      this.form.value.cualesOtros	,
      this.form.value.tuberculosis	,
      this.form.value.neumonia	,
      this.form.value.hasma	,
      this.form.value.faringeamigdalitis	,
      this.form.value.bronquitis	,
      this.form.value.gastritis	,
      this.form.value.colitis	,
      this.form.value.gastroenteritis	,
      this.form.value.hepatitis	,
      this.form.value.cuandoHepatitis	,
      this.form.value.diabetes,
      this.form.value.cuandoDiabetes,
      this.form.value.glucosa,
      );
    }
  }
