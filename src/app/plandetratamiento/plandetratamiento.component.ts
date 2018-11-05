import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlandeTratamiento } from '../modelos/plandetratamiento.model';
import { PlandetratService } from './plandetratamiento.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR
@Component({
  selector: 'app-plandetratamiento',
  templateUrl: './plandetratamiento.component.html',
  styleUrls: ['./plandetratamiento.component.css']
})

export class PlandetratamientoComponent implements OnInit, OnDestroy {
  form: FormGroup;
  rojo = false;
  valorC: string[];
  isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    plandeTratamiento: PlandeTratamiento;

  constructor(
    public plandeTratService: PlandetratService,
      public route: ActivatedRoute, // COPIAR
      private authService: AuthService, // COPIAR
  ) {
    this.valorC =
    [
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5',
      '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5'
    ];
  }

  ngOnInit() {
     // COPIAR
     this.authStatusSub = this.authService
     .getAuthStatusListener()
     .subscribe(authStatus => {
       this.isLoading = false;
     });
     // COPIAR

    this.form = new FormGroup({
      fechaTrab: new FormControl((new Date()).toISOString(), { validators: [Validators.required] }),
      trabajo: new FormControl(null, {validators: [Validators.required] }),
      profesor: new FormControl(null, {validators: [Validators.required] }),
      cariadas: new FormControl(null, {validators: [Validators.required] }),
      perdidas: new FormControl(null, {validators: [Validators.required] }),
      obturadas: new FormControl(null, {validators: [Validators.required] }),
      extracciones: new FormControl(null, {validators: [Validators.required] }),
      indicadas: new FormControl(null, {validators: [Validators.required] }),
      cariadastem: new FormControl(null, {validators: [Validators.required] }),
      perdidastem: new FormControl(null, {validators: [Validators.required] }),
      obturadastem: new FormControl(null, {validators: [Validators.required] }),
      extraccionestem: new FormControl(null, {validators: [Validators.required] }),
      indicadastem: new FormControl(null, {validators: [Validators.required] }),
      nombre: new FormControl(null, {validators: [Validators.required] }),
      cuat: new FormControl(null, {validators: [Validators.required] }),
      equipo: new FormControl(null, {validators: [Validators.required] }),
      sillon: new FormControl(null, {validators: [Validators.required] }),
      nombreaux: new FormControl(null, {validators: [Validators.required] }),
      cuataux: new FormControl(null, {validators: [Validators.required] }),
      equipoaux: new FormControl(null, {validators: [Validators.required] }),
      sillonaux: new FormControl(null, {validators: [Validators.required] }),
    });
  // COPUIAR
  this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if (paramMap.has('id')) {
      this.mode = 'edit';
      this.idsId = paramMap.get('id');
      this.isLoading = true;
      this.plandeTratService.getPlandeTratamiento(this.idsId).subscribe(postData => {
        this.isLoading = false;
        this.idComponent = postData._id;
        this.plandeTratamiento = {
          id: postData._id,
          odont: postData.odont,
          trabajo	: postData.	trabajo	,
          fechaTrab	: postData.	fechaTrab	,
          profesor	: postData.	profesor	,
          cariadas	: postData.	cariadas	,
          perdidas	: postData.	perdidas	,
          obturadas	: postData.	obturadas	,
          extracciones	: postData.	extracciones	,
          indicadas	: postData.	indicadas	,
          cariadastem	: postData.	cariadastem	,
          perdidastem	: postData.	perdidastem	,
          obturadastem	: postData.	obturadastem	,
          extraccionestem	: postData.	extraccionestem	,
          indicadastem	: postData.	indicadastem	,
          nombre	: postData.	nombre	,
          cuat	: postData.	cuat	,
          equipo	: postData.	equipo	,
          sillon	: postData.	sillon	,
          nombreaux	: postData.	nombreaux	,
          cuataux	: postData.	cuataux	,
          equipoaux	: postData.	equipoaux	,
          sillonaux	: postData.	sillonaux	,
          paciente: postData.paciente,
        };
        this.valorC = this.plandeTratamiento.odont;
        this.form.setValue({
          trabajo	: this.plandeTratamiento.	trabajo	,
fechaTrab	: this.plandeTratamiento.	fechaTrab	,
profesor	: this.plandeTratamiento.	profesor	,
cariadas	: this.plandeTratamiento.	cariadas	,
perdidas	: this.plandeTratamiento.	perdidas	,
obturadas	: this.plandeTratamiento.	obturadas	,
extracciones	: this.plandeTratamiento.	extracciones	,
indicadas	: this.plandeTratamiento.	indicadas	,
cariadastem	: this.plandeTratamiento.	cariadastem	,
perdidastem	: this.plandeTratamiento.	perdidastem	,
obturadastem	: this.plandeTratamiento.	obturadastem	,
extraccionestem	: this.plandeTratamiento.	extraccionestem	,
indicadastem	: this.plandeTratamiento.	indicadastem	,
nombre	: this.plandeTratamiento.	nombre	,
cuat	: this.plandeTratamiento.	cuat	,
equipo	: this.plandeTratamiento.	equipo	,
sillon	: this.plandeTratamiento.	sillon	,
nombreaux	: this.plandeTratamiento.	nombreaux	,
cuataux	: this.plandeTratamiento.	cuataux	,
equipoaux	: this.plandeTratamiento.	equipoaux	,
sillonaux	: this.plandeTratamiento.	sillonaux	,

        });
      });
    } else {
      this.mode = 'create';
      this.idsId = localStorage.getItem('pacienteId');
      console.log(this.idsId);
    }
  });

}

changeBlue() {
  this.rojo = false;
}
changeRed() {
  this.rojo = true;
}
checkRed(index) {
  if (this.rojo) { this.valorC[index] = 'red'; } else { this.valorC[index] = '#3f51b5'; }
}


  addPlandeTratamiento() {
    console.log(this.idsId);
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.plandeTratService.addPlandeTratamiento(
        this.valorC,
        this.form.value.	trabajo	,
this.form.value.	fechaTrab	,
this.form.value.	profesor	,
this.form.value.	cariadas	,
this.form.value.	perdidas	,
this.form.value.	obturadas	,
this.form.value.	extracciones	,
this.form.value.	indicadas	,
this.form.value.	cariadastem	,
this.form.value.	perdidastem	,
this.form.value.	obturadastem	,
this.form.value.	extraccionestem	,
this.form.value.	indicadastem	,
this.form.value.	nombre	,
this.form.value.	cuat	,
this.form.value.	equipo	,
this.form.value.	sillon	,
this.form.value.	nombreaux	,
this.form.value.	cuataux	,
this.form.value.	equipoaux	,
this.form.value.	sillonaux	,
        this.idsId
      );
    } else {
        console.log(this.idComponent);
        this.plandeTratService.updatePlandeTratamiento(

        this.idComponent,
        this.valorC,
        this.form.value.	trabajo	,
this.form.value.	fechaTrab	,
this.form.value.	profesor	,
this.form.value.	cariadas	,
this.form.value.	perdidas	,
this.form.value.	obturadas	,
this.form.value.	extracciones	,
this.form.value.	indicadas	,
this.form.value.	cariadastem	,
this.form.value.	perdidastem	,
this.form.value.	obturadastem	,
this.form.value.	extraccionestem	,
this.form.value.	indicadastem	,
this.form.value.	nombre	,
this.form.value.	cuat	,
this.form.value.	equipo	,
this.form.value.	sillon	,
this.form.value.	nombreaux	,
this.form.value.	cuataux	,
this.form.value.	equipoaux	,
this.form.value.	sillonaux	,
        this.idsId
      );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
