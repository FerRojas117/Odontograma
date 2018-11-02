import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AntGService } from './antgenerales.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { AntG } from '../modelos/antgenerales.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR

@Component({
  selector: 'app-antecedentesgenerales',
  templateUrl: './antgenerales.component.html',
  styleUrls: ['./antgenerales.component.css']
})

export class AntgeneralesComponent implements OnInit, OnDestroy {
  form: FormGroup;
    parto_dis = false;
    isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    antg: AntG;

  ginobs = new FormControl();
  ginobsList: string[] = [
    'Menarca', 'Ritmo menstrual', 'Edad de inicio de vida sexual', 
    'Fecha de ultima regla', 'Embarazos', 'Partos', 'Fecha del ultimo parto', 
    'Cesáreas', 'Abortos', 'Hijos con bajo peso al nacer', 'Hijos macrósomicos', 
    'Edad de los hijos vivos', 'Hijos con bajo peso al nacer', 'Tipos de método de planificación familiar', 
    'Tiempo de uso del metodo'];
    
    
  constructor(
    public antgeService: AntGService,
    public route: ActivatedRoute, // COPIAR
    private authService: AuthService, // COPIAR
    ) {}
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'fechaParto') { this.form.controls['cuantosParto'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'fechaParto') { this.form.controls['cuantosParto'].disable(); }
  }
  ngOnInit() {
    this.authStatusSub = this.authService
    .getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    });

    this.form = new FormGroup({
      anthereditarios: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      religion: new FormControl(null, { validators: [Validators.required] }),
      tiprelsex: new FormControl(null, { validators: [Validators.required] }),
      parejas: new FormControl(null, { validators: [Validators.required] }),
      calalim: new FormControl(null, { validators: [Validators.required] }),
      higpers: new FormControl(null, { validators: [Validators.required] }),
      sedentarismo: new FormControl(null, { validators: [Validators.required] }),
      calhabit: new FormControl(null, { validators: [Validators.required] }),
      perspat: new FormControl(null, { validators: [Validators.required] }),
      ginecoobst: new FormControl(null, { validators: [Validators.required] }),
      edades: new FormControl(null, { validators: [Validators.required] }),
      planifami: new FormControl(null, { validators: [Validators.required] }),
      partos: new FormControl(null, { validators: [Validators.required] }),
      fechaParto: new FormControl(null, { validators: [Validators.required] }),
      planifamitiem: new FormControl(null, { validators: [Validators.required] }),
      cuantosParto: new FormControl(null, { validators: [Validators.required] }),
      menarca: new FormControl(null, { validators: [Validators.required] }),
      embarazos: new FormControl(null, { validators: [Validators.required] }),
      bajoPeso: new FormControl(null, { validators: [Validators.required] }),
      edadHijos: new FormControl(null, { validators: [Validators.required] }),
      hijosMacro: new FormControl(null, { validators: [Validators.required] }),
      ritmo: new FormControl(null, { validators: [Validators.required] }),
      regla: new FormControl(null, { validators: [Validators.required] }),
      cesareas: new FormControl(null, { validators: [Validators.required] }),
      vidaSex: new FormControl(null, { validators: [Validators.required] }),
      abortos: new FormControl(null, { validators: [Validators.required] }),
    });
    this.form.controls['cuantosParto'].disable();
    this.form.controls['fechasParto'].disable();

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.idsId = paramMap.get('id');
        this.isLoading = true;
        this.antgeService.getAntG(this.idsId).subscribe(postData => {
          this.isLoading = false;
          this.idComponent = postData._id;
          this.antg = {
            id: postData._id,
            religion	:postData.	religion	,
            tiprelsex	:postData.	tiprelsex	,
            parejas	:postData.	parejas	,
            calalim	:postData.	calalim	,
            higpers	:postData.	higpers	,
            sedentarismo	:postData.	sedentarismo	,
            calhabit	:postData.	calhabit	,
            perspat	:postData.	perspat	,
            ginecoobst	:postData.	ginecoobst	,
            edades	:postData.	edades	,
            planifami	:postData.	planifami	,
            partos	:postData.	partos	,
            fechaParto	:postData.	fechaParto	,
            planifamitiem	:postData.	planifamitiem	,
            cuantosParto	:postData.	cuantosParto	,
            menarca	:postData.	menarca	,
            embarazos	:postData.	embarazos	,
            bajoPeso	:postData.	bajoPeso	,
            edadHijos	:postData.	edadHijos	,
            hijosMacro	:postData.	hijosMacro	,
            ritmo	:postData.	ritmo	,
            regla	:postData.	regla	,
            cesareas	:postData.	cesareas	,
            vidaSex	:postData.	vidaSex	,
            abortos	:postData.	abortos	,
            paciente: postData.paciente,

          };
          this.form.setValue({
            religion	:this.antg.	religion	,
            tiprelsex	:this.antg.	tiprelsex	,
            parejas	:this.antg.	parejas	,
            calalim	:this.antg.	calalim	,
            higpers	:this.antg.	higpers	,
            sedentarismo	:this.antg.	sedentarismo	,
            calhabit	:this.antg.	calhabit	,
            perspat	:this.antg.	perspat	,
            ginecoobst	:this.antg.	ginecoobst	,
            edades	:this.antg.	edades	,
            planifami	:this.antg.	planifami	,
            partos	:this.antg.	partos	,
            fechaParto	:this.antg.	fechaParto	,
            planifamitiem	:this.antg.	planifamitiem	,
            cuantosParto	:this.antg.	cuantosParto	,
            menarca	:this.antg.	menarca	,
            embarazos	:this.antg.	embarazos	,
            bajoPeso	:this.antg.	bajoPeso	,
            edadHijos	:this.antg.	edadHijos	,
            hijosMacro	:this.antg.	hijosMacro	,
            ritmo	:this.antg.	ritmo	,
            regla	:this.antg.	regla	,
            cesareas	:this.antg.	cesareas	,
            vidaSex	:this.antg.	vidaSex	,
            abortos	:this.antg.	abortos	,
            
          });
        });
      } else {
        this.mode = 'create';
        this.idsId = localStorage.getItem('pacienteId');
        console.log(this.idsId);
      }
    });
  }

  addAntG() {
    console.log(this.idsId);
    this.antgeService.addAntG(
      this.form.value.anthereditarios,
      this.form.value.religion,
      this.form.value.tiprelsex,
      this.form.value.parejas,
      this.form.value.calalim,
      this.form.value.higpers,
      this.form.value.sedentarismo,
      this.form.value.calhabit,
      this.form.value.perspat,
      this.form.value.ginecoobst,
      this.form.value.edades,
      this.form.value.planifami,
      this.form.value.  partos  ,
this.form.value.  fechaParto  ,
this.form.value.  planifamitiem ,
this.form.value.  cuantosParto  ,
this.form.value.  menarca ,
this.form.value.  embarazos ,
this.form.value.  bajoPeso  ,
this.form.value.  edadHijos ,
this.form.value.  hijosMacro  ,
this.form.value.  ritmo ,
this.form.value.  regla ,
this.form.value.  cesareas  ,
this.form.value.  vidaSex ,
this.form.value.  abortos ,
this.idsId
    );
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.antgeService.addAntG(
        this.form.value.peso,
        this.form.value.religion	,
        this.form.value.tiprelsex	,
        this.form.value.parejas	,
        this.form.value.calalim	,
        this.form.value.higpers	,
        this.form.value.sedentarismo	,
        this.form.value.calhabit	,
        this.form.value.perspat	,
        this.form.value.ginecoobst	,
        this.form.value.edades	,
        this.form.value.planifami	,
        this.form.value.partos	,
        this.form.value.fechaParto	,
        this.form.value.planifamitiem	,
        this.form.value.cuantosParto	,
        this.form.value.menarca	,
        this.form.value.embarazos	,
        this.form.value.bajoPeso	,
        this.form.value.edadHijos	,
        this.form.value.hijosMacro	,
        this.form.value.ritmo	,
        this.form.value.regla	,
        this.form.value.cesareas	,
        this.form.value.vidaSex	,
        this.form.value.abortos	,
        this.idsId
      );
    } else {
        console.log(this.idComponent);
        this.antgeService.updateAntG(
        this.idComponent,
        this.form.value.peso,
        this.form.value.religion	,
        this.form.value.tiprelsex	,
        this.form.value.parejas	,
        this.form.value.calalim	,
        this.form.value.higpers	,
        this.form.value.sedentarismo	,
        this.form.value.calhabit	,
        this.form.value.perspat	,
        this.form.value.ginecoobst	,
        this.form.value.edades	,
        this.form.value.planifami	,
        this.form.value.partos	,
        this.form.value.fechaParto	,
        this.form.value.planifamitiem	,
        this.form.value.cuantosParto	,
        this.form.value.menarca	,
        this.form.value.embarazos	,
        this.form.value.bajoPeso	,
        this.form.value.edadHijos	,
        this.form.value.hijosMacro	,
        this.form.value.ritmo	,
        this.form.value.regla	,
        this.form.value.cesareas	,
        this.form.value.vidaSex	,
        this.form.value.abortos	,
        this.idsId
      );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
