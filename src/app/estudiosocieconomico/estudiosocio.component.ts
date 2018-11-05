import { Component, OnInit,  OnDestroy   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstuService } from './estudiosocio.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { Estu } from '../modelos/estudiosocio.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR

@Component({
  selector: 'app-estudiosocio',
  templateUrl: './estudiosocio.component.html',
  styleUrls: ['./estudiosocio.component.css']
})
export class EstudiosocioComponent implements OnInit,  OnDestroy {
  form: FormGroup;
  isLoading = false; // COPIAR
  private mode = 'create'; // COPIAR
  private idsId: string; // COPIAR
  private idComponent: string;
  private authStatusSub: Subscription; // COPIAR
  private idUpdated = new Subscription;
  idIdent: string;
  estu: Estu;
  ingresos = new FormControl();
  ingresosList: string[] = ['No tiene', 'Menor de $300', 'De $300 a $500', 'de $500 a $800', 'de $800 a $1200', 'de $1200 a $2400'];

  gradoinst = new FormControl();
  gradoinstList: string[] = ['Analfabeta', 'Primaria', 'Secundaria', 'Preparatoria', 'Profesional', 'Técnica'];
  constructor(public estuService: EstuService,
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
      direccion: new FormControl(null, { validators: [Validators.required] }),
      tiemporadi: new FormControl(null, { validators: [Validators.required] }),
      fechnac: new FormControl(null, { validators: [Validators.required] }),
      telefono: new FormControl(null, { validators: [Validators.required] }),
      lugarDeNacimiento: new FormControl(null, { validators: [Validators.required] }),
      nacionalidad: new FormControl(null, { validators: [Validators.required] }),
      sexoN: new FormControl(null, { validators: [Validators.required] }),
      estadocivil: new FormControl(null, { validators: [Validators.required] }),
      ocupacion: new FormControl(null, { validators: [Validators.required] }),
      lugar: new FormControl(null, { validators: [Validators.required] }),
      direcc: new FormControl(null, { validators: [Validators.required] }),
      ingresos: new FormControl(null, { validators: [Validators.required] }),
      gradoinst: new FormControl(null, { validators: [Validators.required] }),
      numfam: new FormControl(null, { validators: [Validators.required] }),
      digsoci: new FormControl(null, { validators: [Validators.required] }),
      asigancion: new FormControl(null, { validators: [Validators.required] }),
      tutor: new FormControl(null, { validators: [Validators.required] }),
      obs: new FormControl(null, { validators: [Validators.required] }),
    });
   // COPUIAR
   this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if (paramMap.has('id')) {
      this.mode = 'edit';
      this.idsId = paramMap.get('id');
      this.isLoading = true;
      this.estuService.getEstu(this.idsId).subscribe(postData => {
        this.isLoading = false;
        this.idComponent = postData._id;
        this.estu = {
          id: postData._id,
direccion	:  postData.	direccion	,
tiemporadi	:  postData.	tiemporadi	,
fechnac	:  postData.	fechnac	,
telefono	:  postData.	telefono	,
lugarDeNacimiento	:  postData.	lugarDeNacimiento	,
nacionalidad	:  postData.	nacionalidad	,
sexo	:  postData.	sexo	,
estadocivil	:  postData.	estadocivil	,
ocupacion	:  postData.	ocupacion	,
lugar	:  postData.	lugar	,
direcc	:  postData.	direcc	,
ingresos	:  postData.	ingresos	,
gradoinst	:  postData.	gradoinst	,
numfam	:  postData.	numfam	,
digsoci	:  postData.	digsoci	,
asignacion	:  postData.	asignacion	,
tutor	:  postData.	tutor	,
obs	:  postData.	obs	,
          paciente: postData.paciente,
        };
        this.form.setValue({
direccion	: this.estu.	direccion	,
tiemporadi	: this.estu.	tiemporadi	,
fechnac	: this.estu.	fechnac	,
telefono	: this.estu.	telefono	,
lugarDeNacimiento	: this.estu.	lugarDeNacimiento	,
nacionalidad	: this.estu.	nacionalidad	,
sexo	: this.estu.	sexo	,
estadocivil	: this.estu.	estadocivil	,
ocupacion	: this.estu.	ocupacion	,
lugar	: this.estu.	lugar	,
direcc	: this.estu.	direcc	,
ingresos	: this.estu.	ingresos	,
gradoinst	: this.estu.	gradoinst	,
numfam	: this.estu.	numfam	,
digsoci	: this.estu.	digsoci	,
asignacion	: this.estu.	asignacion	,
tutor	: this.estu.	tutor	,
obs	: this.estu.	obs	,
        });
      });
    } else {
      this.mode = 'create';
      this.idsId = localStorage.getItem('pacienteId');
      console.log(this.idsId);
    }
  });

}
  addEstu() {
    console.log(this.idsId);
    if (this.form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.estuService.addEstu(
this.form.value.	direccion	,
this.form.value.	tiemporadi	,
this.form.value.	fechnac	,
this.form.value.	telefono	,
this.form.value.	lugarDeNacimiento	,
this.form.value.	nacionalidad	,
this.form.value.	sexo	,
this.form.value.	estadocivil	,
this.form.value.	ocupacion	,
this.form.value.	lugar	,
this.form.value.	direcc	,
this.form.value.	ingresos	,
this.form.value.	gradoinst	,
this.form.value.	numfam	,
this.form.value.	digsoci	,
this.form.value.	asignacion	,
this.form.value.	tutor	,
this.form.value.	obs	,
        this.idsId
      );
    } else {
        console.log(this.idComponent);
        this.estuService.updateEstu(
        this.idComponent,
        this.form.value.	direccion	,
        this.form.value.	tiemporadi	,
        this.form.value.	fechnac	,
        this.form.value.	telefono	,
        this.form.value.	lugarDeNacimiento	,
        this.form.value.	nacionalidad	,
        this.form.value.	sexo	,
        this.form.value.	estadocivil	,
        this.form.value.	ocupacion	,
        this.form.value.	lugar	,
        this.form.value.	direcc	,
        this.form.value.	ingresos	,
        this.form.value.	gradoinst	,
        this.form.value.	numfam	,
        this.form.value.	digsoci	,
        this.form.value.	asignacion	,
        this.form.value.	tutor	,
        this.form.value.	obs	,
        this.idsId
      );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}




