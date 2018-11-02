import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LaboService } from './laboratoriogabinete.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { Labo } from '../modelos/laboratoriogabinete.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR

@Component({
  selector: 'app-laboratoriogabinete',
  templateUrl: './laboratoriogabinete.component.html',
  styleUrls: ['./laboratoriogabinete.component.css']
})
export class LaboratorioGabineteComponent implements OnInit {
    form: FormGroup;
    isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    labo: Labo;

    constructor(public laboservice: LaboService,
      public route: ActivatedRoute, // COPIAR
      private authService: AuthService, // COPIAR
) {}
  
    ngOnInit() {
       // COPIAR
       this.authStatusSub = this.authService
       .getAuthStatusListener()
       .subscribe(authStatus => {
         this.isLoading = false;
       });
       // COPIAR
      this.form = new FormGroup({
        resultadosPrevios: new FormControl(null, { validators: [Validators.required] }),
        resultPrevios2: new FormControl(null, { validators: [Validators.required] }),
      });
    // COPUIAR
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.idsId = paramMap.get('id');
        this.isLoading = true;
        this.laboservice.getLabo(this.idsId).subscribe(postData => {
          this.isLoading = false;
          this.idComponent = postData._id;
          this.labo = {
            id: postData._id,
            resultadosPrevios: postData.resultadosPrevios,
            resultPrevios2: postData.resultPrevios2,
            paciente: postData.paciente,
          };
          this.form.setValue({
            resultadosPrevios: this.labo.resultadosPrevios,
            resultPrevios2: this.labo.resultPrevios2,
          });
        });
      } else {
        this.mode = 'create';
        this.idsId = localStorage.getItem('pacienteId');
        console.log(this.idsId);
      }
    });

  }
    addLabo() {
      console.log(this.idsId);
      this.laboservice.addLabo(
        this.form.value.resultadosPrevios,
        this.form.value.resultPrevios2,
        this.idsId
      );
      if (this.form.invalid) {
        return;
      }
      this.isLoading = true;
      if (this.mode === 'create') {
        this.laboservice.addLabo(
          this.form.value.resultadosPrevios,
          this.form.value.resultPrevios2,
          this.idsId
        );
      } else {
          console.log(this.idComponent);
          this.laboservice.updateLabo(
          this.idComponent,
          this.form.value.resultadosPrevios,
          this.form.value.resultPrevios2,
          this.idsId
        );
      }
      this.form.reset();

    }

    ngOnDestroy() {
      this.authStatusSub.unsubscribe();
    }

 }
