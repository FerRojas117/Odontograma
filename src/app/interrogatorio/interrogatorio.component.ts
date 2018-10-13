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
    cardio_dis : boolean;
    otros_dis: boolean;
  diabetes_dis: boolean;
  hepatitis_dis: boolean;
 constructor(public interService: InterService) {}
  desapareceOtros(){
    this.otros_dis = true;
  }
  apareceOtros(){
    if ( this.otros_dis== true){
      this.otros_dis=false;
    }
    
  }
  desapareceDiabetes(){
    this.diabetes_dis = true;
  }
  apareceDiabetes(){
    if ( this.diabetes_dis== true){
      this.diabetes_dis=false;
    }
    
  }
  desapareceHepatitis(){
    this.hepatitis_dis = true;
  }
  apareceHepatitis(){
    if ( this.hepatitis_dis== true){
      this.hepatitis_dis=false;
    }
    
  }
    desapareceCardio(){
      this.cardio_dis = true;
    }
    apareceCardio(){
      if ( this.cardio_dis== true){
        this.cardio_dis=false;
      }
      
    }
 
    ngOnInit() {
      this.cardio_dis = false;
      this.form = new FormGroup({
        nombre: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        presionArterial	: new FormControl(null, { validators: [Validators.required] }),
          fiebreReumatica	: new FormControl(null, { validators: [Validators.required] }),
          hemorragias	: new FormControl(null, { validators: [Validators.required] }),
          anemia	: new FormControl(null, { validators: [Validators.required] }),
          infarto	: new FormControl(null, { validators: [Validators.required] }),
          otros	: new FormControl(null, { validators: [Validators.required] }),
          tuberculosis	: new FormControl(null, { validators: [Validators.required] }),
          neumonia	: new FormControl(null, { validators: [Validators.required] }),
          hasma	: new FormControl(null, { validators: [Validators.required] }),
          faringeamigdalitis	: new FormControl(null, { validators: [Validators.required] }),
          bronquitis	: new FormControl(null, { validators: [Validators.required] }),
          gastritis	: new FormControl(null, { validators: [Validators.required] }),
          colitis	: new FormControl(null, { validators: [Validators.required] }),
          gastroenteritis	: new FormControl(null, { validators: [Validators.required] }),
          hepatitis	: new FormControl(null, { validators: [Validators.required] }),
          diabetes	: new FormControl(null, { validators: [Validators.required] }),
      });
    }
    addInter() {
      this.interService.addInter(
      this.form.value.presionArterial,
      this.form.value.fiebreReumatica,
      this.form.value.hemorragias	,
      this.form.value.anemia	,
      this.form.value.infarto	,
      this.form.value.otros	,
      this.form.value.tuberculosis	,
      this.form.value.neumonia	,
      this.form.value.hasma	,
      this.form.value.faringeamigdalitis	,
      this.form.value.bronquitis	,
      this.form.value.gastritis	,
      this.form.value.colitis	,
      this.form.value.gastroenteritis	,
      this.form.value.hepatitis	,
      this.form.value.diabetes	

      );
    }
  }
  