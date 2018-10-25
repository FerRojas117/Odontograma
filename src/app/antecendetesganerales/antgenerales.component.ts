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
    parto_dis = false;

  ginobs = new FormControl();
  ginobsList: string[] = [
    'Menarca', 'Ritmo menstrual', 'Edad de inicio de vida sexual', 
    'Fecha de ultima regla', 'Embarazos', 'Partos', 'Fecha del ultimo parto', 
    'Cesáreas', 'Abortos', 'Hijos con bajo peso al nacer', 'Hijos macrósomicos', 
    'Edad de los hijos vivos', 'Hijos con bajo peso al nacer', 'Tipos de método de planificación familiar', 
    'Tiempo de uso del metodo'];
    
    
  constructor(public antgeService: AntGService) {}
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'fechaParto') { this.form.controls['cuantosParto'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'fechaParto') { this.form.controls['cuantosParto'].disable(); }
  }
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
      partos: new FormControl(null, { validators: [Validators.required] }),
      fechaParto: new FormControl(null, { validators: [Validators.required] }),
      planifamitiem: new FormControl(null, { validators: [Validators.required] }),
      cuantosParto: new FormControl(null, { validators: [Validators.required] }),
      menarca: new FormControl(null, { validators: [Validators.required] }),
      embarazos: new FormControl(null, { validators: [Validators.required] }),
      bajoPeso: new FormControl(null, { validators: [Validators.required] }),
      edadHijos: new FormControl(null, { validators: [Validators.required] }),
      hijosMacro: new FormControl(null, { validators: [Validators.required] }),
      ritmo: new FormControl(null, { validators: [Validators.required] }),
      regla: new FormControl(null, { validators: [Validators.required] }),
      cesareas: new FormControl(null, { validators: [Validators.required] }),
      vidaSex: new FormControl(null, { validators: [Validators.required] }),
      abortos: new FormControl(null, { validators: [Validators.required] }),
    });
    this.form.controls['cuantosParto'].disable();
    this.form.controls['fechasParto'].disable();
  }

  addAntG() {
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
      this.form.value.  partos  ,
this.form.value.  fechaParto  ,
this.form.value.  planifamitiem ,
this.form.value.  cuantosParto  ,
this.form.value.  menarca ,
this.form.value.  embarazos ,
this.form.value.  bajoPeso  ,
this.form.value.  edadHijos ,
this.form.value.  hijosMacro  ,
this.form.value.  ritmo ,
this.form.value.  regla ,
this.form.value.  cesareas  ,
this.form.value.  vidaSex ,
this.form.value.  abortos ,

    );
  }
}
