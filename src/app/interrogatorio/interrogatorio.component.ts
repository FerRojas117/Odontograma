import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InteService } from './interrogatorio.service';

@Component({
  selector: 'app-interrogatorio',
  templateUrl: './interrogatorio.component.html',
  styleUrls: ['./interrogatorio.component.css']
})
export class InterrogatorioComponent implements OnInit {
    form: FormGroup;
    
    
    constructor(public inteservice: InteService) {}
  
    ngOnInit() {
      this.form = new FormGroup({
        presionArterial: new FormControl(null, {
         validators: [Validators.required, Validators.minLength(3)]
        }),
        fiebreReumatica: new FormControl(null, { validators: [Validators.required] }),
        hemorragias: new FormControl(null, { validators: [Validators.required] }),
        anemia: new FormControl(null, { validators: [Validators.required] }),
        infarto: new FormControl(null, { validators: [Validators.required] }),
        otros: new FormControl(null, { validators: [Validators.required] }),
        tuberculosis: new FormControl(null, { validators: [Validators.required] }),
        neumonia: new FormControl(null, { validators: [Validators.required] }),
        asma: new FormControl(null, { validators: [Validators.required] }),
        faringeamigdalitis: new FormControl(null, { validators: [Validators.required] }),
        bronquitis: new FormControl(null, { validators: [Validators.required] }),
        gastritis: new FormControl(null, { validators: [Validators.required] }),
        colitis: new FormControl(null, { validators: [Validators.required] }),
        gastroenteritis: new FormControl(null, { validators: [Validators.required] }),
        hepatitis: new FormControl(null, { validators: [Validators.required] }),
        desdeCuando: new FormControl(null, { validators: [Validators.required] }),
        diabetes: new FormControl(null, { validators: [Validators.required] }),
        haceCuanto: new FormControl(null, { validators: [Validators.required] }),
        valorGlucosa: new FormControl(null, { validators: [Validators.required] }),
        proRenal: new FormControl(null, { validators: [Validators.required] }),
      });
    }
   addIInte() {
      this.inteservice.addInte(
        this.form.value.presionArterial,
        this.form.value.fiebreReumatica,
        this.form.value.hemorragias,
        this.form.value.anemia,
        this.form.value.infarto,
        this.form.value.otros,
        this.form.value.tuberculosis,
        this.form.value.neumonia,
        this.form.value.asma,
        this.form.value.faringeamigdalitis,
        this.form.value.bronquitis,
        this.form.value.gastritis,
        this.form.value.colitis,
        this.form.value.gastroenteritis,
        this.form.value.hepatitis,
        this.form.value.desdeCuando,
        this.form.value.diabetes,
        this.form.value.haceCuanto,
        this.form.value.valorGlucosa,
        this.form.value.proRenal,
      );
    }
  }
  