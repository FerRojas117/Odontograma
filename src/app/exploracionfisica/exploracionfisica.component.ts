import { Component, OnInit, OnDestroy   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExploService } from './exploracionfisica.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { Explo } from '../modelos/exploracionfisica.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR


@Component({
  selector: 'app-exploracionfisica',
  templateUrl: './exploracionfisica.component.html',
  styleUrls: ['./exploracionfisica.component.css']
})
export class ExploracionFisicaComponent implements OnInit, OnDestroy {
    form: FormGroup;
    isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    explo: Explo;
    constructor(
      public exploservice: ExploService,
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
        peso: new FormControl(null, { validators: [Validators.required] }),
        talla: new FormControl(null, { validators: [Validators.required] }),
        frecuenciaCardiaca: new FormControl(null, { validators: [Validators.required] }),
        presionArterial: new FormControl(null, { validators: [Validators.required] }),
        temperatura: new FormControl(null, { validators: [Validators.required] }),
        frecuenciaRespiratoria: new FormControl(null, { validators: [Validators.required] }),
        inspeccionGeneral: new FormControl(null, { validators: [Validators.required] }),
        cabeza: new FormControl(null, { validators: [Validators.required] }),
        cuello: new FormControl(null, { validators: [Validators.required] }),
        torax: new FormControl(null, { validators: [Validators.required] }),
        abdomen: new FormControl(null, { validators: [Validators.required] }),
        columnaVertebral: new FormControl(null, { validators: [Validators.required] }),
        extremidades: new FormControl(null, { validators: [Validators.required] }),
        diagnostico: new FormControl(null, { validators: [Validators.required] }),
        observaciones: new FormControl(null, { validators: [Validators.required] }),
        recomendaciones: new FormControl(null, { validators: [Validators.required] }),
        nombredelMedico: new FormControl(null, { validators: [Validators.required] }),
      });


      // COPUIAR
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('id')) {
          this.mode = 'edit';
          this.idsId = paramMap.get('id');
          this.isLoading = true;
          this.exploservice.getExplo(this.idsId).subscribe(postData => {
            this.isLoading = false;
            this.idComponent = postData._id;
            this.explo = {
              id: postData._id,
              peso: postData.peso,
              talla: postData.talla,
              fCardiaca: postData.fCardiaca,
              presionArterial: postData.presionArterial,
              temperatura: postData.temperatura,
              frecuenciaResp: postData.frecuenciaResp,
              inspeccionGeneral: postData.inspeccionGeneral,
              cabeza: postData.cabeza,
              cuello: postData.cuello,
              torax: postData.torax,
              abdomen: postData.abdomen,
              columnaVertebral: postData.columnaVertebral,
              extremidades: postData.extremidades,
              diagnostico: postData.diagnostico,
              observaciones: postData.observaciones,
              recomendaciones: postData.recomendaciones,
              nombreMedico: postData.nombreMedico,
              paciente: postData.paciente,
            };
            this.form.setValue({
              peso: this.explo.peso,
              talla: this.explo.talla,
              frecuenciaCardiaca: this.explo.fCardiaca,
              presionArterial: this.explo.presionArterial,
              temperatura: this.explo.temperatura,
              frecuenciaRespiratoria: this.explo.frecuenciaResp,
              inspeccionGeneral: this.explo.inspeccionGeneral,
              cabeza: this.explo.cabeza,
              cuello: this.explo.cuello,
              torax: this.explo.torax,
              abdomen: this.explo.abdomen,
              columnaVertebral: this.explo.columnaVertebral,
              extremidades: this.explo.extremidades,
              diagnostico: this.explo.diagnostico,
              observaciones: this.explo.observaciones,
              recomendaciones: this.explo.recomendaciones,
              nombredelMedico: this.explo.nombreMedico,
            });
          });
        } else {
          this.mode = 'create';
          this.idsId = localStorage.getItem('pacienteId');
          console.log(this.idsId);
        }
      });

    }
    addExplo() {
      console.log(this.idsId);

      if (this.form.invalid) {
        return;
      }
      this.isLoading = true;
      if (this.mode === 'create') {
        this.exploservice.addExplo(
          this.form.value.peso,
          this.form.value.talla,
          this.form.value.frecuenciaCardiaca,
          this.form.value.presionArterial,
          this.form.value.temperatura,
          this.form.value.frecuenciaRespiratoria,
          this.form.value.inspeccionGeneral,
          this.form.value.cabeza,
          this.form.value.cuello,
          this.form.value.torax,
          this.form.value.abdomen,
          this.form.value.columnaVertebral,
          this.form.value.extremidades,
          this.form.value.diagnostico,
          this.form.value.observaciones,
          this.form.value.recomendaciones,
          this.form.value.nombredelMedico,
          this.idsId
        );
      } else {
          console.log(this.idComponent);
          this.exploservice.updateExp(
          this.idComponent,
          this.form.value.peso,
          this.form.value.talla,
          this.form.value.frecuenciaCardiaca,
          this.form.value.presionArterial,
          this.form.value.temperatura,
          this.form.value.frecuenciaRespiratoria,
          this.form.value.inspeccionGeneral,
          this.form.value.cabeza,
          this.form.value.cuello,
          this.form.value.torax,
          this.form.value.abdomen,
          this.form.value.columnaVertebral,
          this.form.value.extremidades,
          this.form.value.diagnostico,
          this.form.value.observaciones,
          this.form.value.recomendaciones,
          this.form.value.nombredelMedico,
          this.idsId
        );
      }
      this.form.reset();

    }

    ngOnDestroy() {
      this.authStatusSub.unsubscribe();
    }

 }
