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
  menarca_dis : boolean;
  embarazo_dis : boolean;
  bajopeso_dis : boolean;
  hijosvivos_dis : boolean;
  hijosm_dis : boolean;
  ritmo_dis : boolean;
  regla_dis : boolean;
  cesareas_dis : boolean;
  edad_dis : boolean;
  partos_dis : boolean;
  fechap_dis : boolean;
  abortos_dis : boolean;

  ginobs = new FormControl();
  ginobsList: string[] = [
    'Menarca', 'Ritmo menstrual', 'Edad de inicio de vida sexual', 
    'Fecha de ultima regla', 'Embarazos', 'Partos', 'Fecha del ultimo parto', 
    'Cesáreas', 'Abortos', 'Hijos con bajo peso al nacer', 'Hijos macrósomicos', 
    'Edad de los hijos vivos', 'Hijos con bajo peso al nacer', 'Tipos de método de planificación familiar', 
    'Tiempo de uso del metodo'];
    
  constructor(public antgeService: AntGService) {}
  desapareceMenarca(){
    this.menarca_dis = true;
  }
  apareceMenarca(){
    if ( this.menarca_dis== true){
      this.menarca_dis=false;
    }
  }

  desapareceEmbarazo(){
    this.embarazo_dis = true;
  }
  apareceEmbarazo(){
    if ( this.embarazo_dis== true){
      this.embarazo_dis=false;
    }
  }
 
  desapareceBajopeso(){
    this.bajopeso_dis = true;
  }
  apareceBajopeso(){
    if ( this.bajopeso_dis== true){
      this.bajopeso_dis=false;
    }
  }

  desapareceHijosvivos(){
    this.hijosvivos_dis = true;
  }
  apareceHijosvivos(){
    if ( this.hijosvivos_dis== true){
      this.hijosvivos_dis=false;
    }
  }

  desapareceHijosM(){
    this.hijosm_dis = true;
  }
  apareceHijosM(){
    if ( this.hijosm_dis== true){
      this.hijosm_dis=false;
    }
  }

  desapareceRitmo(){
    this.ritmo_dis = true;
  }
  apareceRitmo(){
    if ( this.ritmo_dis== true){
      this.ritmo_dis=false;
    }
  }

  desapareceRegla(){
    this.regla_dis = true;
  }
  apareceRegla(){
    if ( this.regla_dis== true){
      this.regla_dis=false;
    }
  }

  desapareceCesareas(){
    this.cesareas_dis = true;
  }
  apareceCesareas(){
    if ( this.cesareas_dis== true){
      this.cesareas_dis=false;
    }
  }

  desapareceEdad(){
    this.edad_dis = true;
  }
  apareceEdad(){
    if ( this.edad_dis== true){
      this.edad_dis=false;
    }
  }

  desaparecePartos(){
    this.partos_dis = true;
  }
  aparecePartos(){
    if ( this.partos_dis== true){
      this.partos_dis=false;
    }
  }

  desapareceFechaP(){
    this.fechap_dis = true;
  }
  apareceFechaP(){
    if ( this.fechap_dis== true){
      this.fechap_dis=false;
    }
  }

  desapareceAbortos(){
    this.abortos_dis = true;
  }
  apareceAbortos(){
    if ( this.abortos_dis== true){
      this.abortos_dis=false;
    }
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
    });
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
    );
  }
}
