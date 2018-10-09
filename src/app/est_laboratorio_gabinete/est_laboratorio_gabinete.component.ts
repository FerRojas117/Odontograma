import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentService } from './est_laboratorio_gabinete.service';

@Component({
  selector: 'app-est_laboratorio_gabinete',
  templateUrl: './est_laboratorio_gabinete.html',
  styleUrls: ['./est_laboratorio_gabinete.css']
})
export class Est_laboratorio_gabineteComponent implements OnInit {
    form: FormGroup;
  
    constructor(public identService: IdentService) {}
  
    ngOnInit() {
      this.form = new FormGroup({
        nombre: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        content: new FormControl(null, { validators: [Validators.required] }),
        resultadosPrevios: new FormControl(null, { validators: [Validators.required] }),
      });
    }
    addIdent() {
      this.identService.addIdent(
        this.form.value.resultadosPrevios,
      );
    }
  }