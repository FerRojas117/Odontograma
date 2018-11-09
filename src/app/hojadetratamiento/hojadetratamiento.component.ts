import { Component, OnInit,  OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HojadeTratService } from './hojadetratamiento.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { HojadeTrat } from '../modelos/hojadetratamiento.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR


@Component({
  selector: 'app-hojadetratamiento',
  templateUrl: './hojadetratamiento.component.html',
  styleUrls: ['./hojadetratamiento.component.css']
})
export class HojadetratamientoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    hojadetrat: HojadeTrat;

  constructor(public hojadeTratService: HojadeTratService,
    public route: ActivatedRoute, // COPIAR
    private authService: AuthService, // COPIAR

    ) { }

  ngOnInit() {
     // COPIAR
     this.authStatusSub = this.authService
     .getAuthStatusListener()
     .subscribe(authStatus => {
       this.isLoading = false;
     });
     // COPIAR

    this.form = new FormGroup({
      pacienteh: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      alumno: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      profresponsable: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      noempleado: new FormControl(null, {validators: [Validators.required] }),
      orgdental: new FormControl(null, {validators: [Validators.required] }),
      diagnostico: new FormControl(null, {validators: [Validators.required] }),
      tratamiento: new FormControl(null, {validators: [Validators.required] }),
      costo: new FormControl(null, {validators: [Validators.required] }),
      nopoliza: new FormControl(null, {validators: [Validators.required] }),
    });
     // COPUIAR
     this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.idsId = paramMap.get('id');
        this.isLoading = true;
        this.hojadeTratService.getHojadeTrat(this.idsId).subscribe(postData => {
          this.isLoading = false;
          this.idComponent = postData._id;
          this.hojadetrat = {
            id: postData._id,
            pacienteh: postData.pacienteh	,
            alumno: postData.alumno,
            profresponsable: postData.profresponsable	,
            noempleado: postData.noempleado	,
            orgdental: postData.orgdental	,
            diagnostico: postData.diagnostico	,
            tratamiento: postData.tratamiento	,
            costo: postData.costo,
            nopoliza: postData.nopoliza,
            paciente: postData.paciente,
          };
          this.form.setValue({
            pacienteh: this.hojadetrat.pacienteh	,
            alumno: this.hojadetrat.alumno	,
            profesorresponsable: this.hojadetrat.profresponsable	,
            noempleado: this.hojadetrat.noempleado	,
            orgdental: this.hojadetrat.orgdental	,
            diagnostico: this.hojadetrat.diagnostico	,
            tratamiento: this.hojadetrat.tratamiento	,
            costo: this.hojadetrat.costo	,
            nopoliza: this.hojadetrat.nopoliza	,
          });
        });
      } else {
        this.mode = 'create';
        this.idsId = localStorage.getItem('pacienteId');
        console.log(this.idsId);
      }
    });

  }
  addHojadeTrat() {

    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.hojadeTratService.addHojadeTrat(
        this.form.value.pacienteh	,
        this.form.value.alumno	,
        this.form.value.profresponsable	,
        this.form.value.noempleado	,
        this.form.value.orgdental	,
        this.form.value.diagnostico	,
        this.form.value.tratamiento	,
        this.form.value.costo	,
        this.form.value.nopoliza	,
        this.idsId
      );
    } else {
        console.log(this.idComponent);
        this.hojadeTratService.updateHojadeTrat(
        this.idComponent,
        this.form.value.pacienteh	,
        this.form.value.alumno	,
        this.form.value.profresponsable	,
        this.form.value.noempleado	,
        this.form.value.orgdental	,
        this.form.value.diagnostico	,
        this.form.value.tratamiento	,
        this.form.value.costo	,
        this.form.value.nopoliza	,
        this.idsId
      );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
