import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsenService } from './consentimiento.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { Consen } from '../modelos/consentimiento.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR


@Component({
  selector: 'app-consentimiento',
  templateUrl: './consentimiento.component.html',
  styleUrls: ['./consentimiento.component.css']
})

export class ConsentimientoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    consen: Consen;
  constructor(public consenService: ConsenService,
    public route: ActivatedRoute, // COPIAR
    private authService: AuthService, // COPIAR
    ) { }

  ngOnInit() {

    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });

    this.form = new FormGroup({
      fechaConsen: new FormControl((new Date()).toISOString(), { validators: [Validators.required] }),
      pacienteh: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      alumno: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      odontologo: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      nombre1: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.idsId = paramMap.get('id');
        this.isLoading = true;
        this.consenService.getConsen(this.idsId).subscribe(postData => {
          this.isLoading = false;
          this.idComponent = postData._id;
          this.consen = {
            id: postData._id,
            fechaConsen: postData.fechaConsen,
            pacienteh: postData.pacienteh,
            alumno: postData.alumno,
            odontologo: postData.odontologo,
            nombre1: postData.nombre1,
            paciente: postData.paciente
          };
          this.form.setValue({
            fechaConsen: this.consen.fechaConsen,
            pacienteh: this.consen.paciente,
            alumno: this.consen.alumno,
            odontologo: this.consen.odontologo,
            nombre1: this.consen.nombre1
          });
        });
      } else {
        this.mode = 'create';
        this.idsId = localStorage.getItem('pacienteId');
        console.log(this.idsId);
      }
    });

  }
  addConsen() {
    console.log(this.idsId);

    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.consenService.addConsen(
        this.form.value.fechaConsen,
        this.form.value.pacienteh,
        this.form.value.alumno,
        this.form.value.odontologo,
        this.form.value.nombre1,
        this.idsId
      );
    } else {
        console.log(this.idComponent);
        this.consenService.updateConsen(
        this.idComponent,
        this.form.value.fechaConsen,
        this.form.value.pacienteh,
        this.form.value.alumno,
        this.form.value.odontologo,
        this.form.value.nombre1,
        this.idsId
      );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}

