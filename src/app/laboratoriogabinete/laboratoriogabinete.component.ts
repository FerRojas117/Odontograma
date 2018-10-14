import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LaboService } from './laboratoriogabinete.service';

@Component({
  selector: 'app-laboratoriogabinete',
  templateUrl: './laboratoriogabinete.component.html',
  styleUrls: ['./laboratoriogabinete.component.css']
})
export class LaboratorioGabineteComponent implements OnInit {
    form: FormGroup;
  
    constructor(public laboservice: LaboService) {}
  
    ngOnInit() {
      this.form = new FormGroup({
        nombre: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        resultadosPrevios: new FormControl(null, { validators: [Validators.required] }),
        resultPrevios2: new FormControl(null, { validators: [Validators.required] }),
      });
    }
    addLabo() {
      this.laboservice.addLabo(
        this.form.value.resultadosPrevios,
        this.form.value.resultPrevios2,
      );
    }
  }