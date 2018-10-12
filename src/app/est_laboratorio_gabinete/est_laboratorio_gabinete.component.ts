import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LabGabService } from './est_laboratorio_gabinete.service';

@Component({
  selector: 'app-est_laboratorio_gabinete',
  templateUrl: './est_laboratorio_gabinete.component.html',
  styleUrls: ['./est_laboratorio_gabinete.component.css']
})
export class Est_laboratorio_gabineteComponent implements OnInit {
    form: FormGroup;
  
    constructor(public labGabService: LabGabService) {}
  
    ngOnInit() {
      this.form = new FormGroup({
        nombre: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        content: new FormControl(null, { validators: [Validators.required] }),
        resultadosPrevios: new FormControl(null, { validators: [Validators.required] }),
      });
    }
    addLabGab() {
      this.labGabService.addLabGab(
        this.form.value.resultadosPrevios,
      );
    }
  }