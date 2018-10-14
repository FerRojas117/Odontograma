import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
<<<<<<< HEAD:src/app/laboratoriogabinete/laboratoriogabinete.component.ts
import { LaboService } from './laboratoriogabinete.service';

@Component({
  selector: 'app-laboratoriogabinete',
  templateUrl: './laboratoriogabinete.component.html',
  styleUrls: ['./laboratoriogabinete.component.css']
=======
import { LabGabService } from './est_laboratorio_gabinete.service';

@Component({
  selector: 'app-est_laboratorio_gabinete',
  templateUrl: './est_laboratorio_gabinete.component.html',
  styleUrls: ['./est_laboratorio_gabinete.component.css']
>>>>>>> bd0b5992ac1fc04a5ee06023a8d0322d56b30c97:src/app/est_laboratorio_gabinete/est_laboratorio_gabinete.component.ts
})
export class LaboratorioGabineteComponent implements OnInit {
    form: FormGroup;
  
<<<<<<< HEAD:src/app/laboratoriogabinete/laboratoriogabinete.component.ts
    constructor(public laboservice: LaboService) {}
=======
    constructor(public labGabService: LabGabService) {}
>>>>>>> bd0b5992ac1fc04a5ee06023a8d0322d56b30c97:src/app/est_laboratorio_gabinete/est_laboratorio_gabinete.component.ts
  
    ngOnInit() {
      this.form = new FormGroup({
        nombre: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        resultadosPrevios: new FormControl(null, { validators: [Validators.required] }),
        resultPrevios2: new FormControl(null, { validators: [Validators.required] }),
      });
    }
<<<<<<< HEAD:src/app/laboratoriogabinete/laboratoriogabinete.component.ts
    addLabo() {
      this.laboservice.addLabo(
=======
    addLabGab() {
      this.labGabService.addLabGab(
>>>>>>> bd0b5992ac1fc04a5ee06023a8d0322d56b30c97:src/app/est_laboratorio_gabinete/est_laboratorio_gabinete.component.ts
        this.form.value.resultadosPrevios,
        this.form.value.resultPrevios2,
      );
    }
  }