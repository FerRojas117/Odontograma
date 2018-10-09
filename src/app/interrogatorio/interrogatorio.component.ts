import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentService } from './interrogatorio.service';

@Component({
  selector: 'app-interrogatorio',
  templateUrl: './interrogatorio.component.html',
  styleUrls: ['./interrogatorio.component.css']
})
export class InterrogatorioComponent implements OnInit {
    form: FormGroup;
  
    constructor(public identService: IdentService) {}
  
    ngOnInit() {
      this.form = new FormGroup({
        nombre: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        content: new FormControl(null, { validators: [Validators.required] }),
        presionArterial: new FormControl(null, { validators: [Validators.required] }),
        //fiebreReumatica: new FormControl(null, { validators: [Validators.required] }),
        //hemorragias: new FormControl(null, { validators: [Validators.required] }),
        //anemia: new FormControl(null, { validators: [Validators.required] }),
        //infarto: new FormControl(null, { validators: [Validators.required] }),
        //otros: new FormControl(null, { validators: [Validators.required] }),
        aparatoRespiratorio: new FormControl(null, { validators: [Validators.required] }),
        //tuberculosis: new FormControl(null, { validators: [Validators.required] }),
        //neumonia: new FormControl(null, { validators: [Validators.required] }),
        ///hasma: new FormControl(null, { validators: [Validators.required] }),
        //faringeamigdalitis: new FormControl(null, { validators: [Validators.required] }),
        //broquitis: new FormControl(null, { validators: [Validators.required] }),
        aparatoDigestivo: new FormControl(null, { validators: [Validators.required] }),
        
      });
    }
    addIdent() {
      this.identService.addIdent(
        this.form.value.presionArterial,
        this.form.value.aparatoRespiratorio,
        this.form.value.aparatoRespiratorio,
      );
    }
  }
  