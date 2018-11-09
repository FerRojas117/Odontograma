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
      religion: new FormControl(null),
      tiprelsex: new FormControl(null),
      parejas: new FormControl(null),
      calalim: new FormControl(null),
      higpers: new FormControl(null),
      sedentarismo: new FormControl(null),
      calhabit: new FormControl(null),
      perspat: new FormControl(null),
      menarca: new FormControl(null),
      embarazos: new FormControl(null),
      bajoPeso: new FormControl(null),
      edadHijos: new FormControl(null),
      hijosMacro: new FormControl(null),
      ritmo: new FormControl(null),
      regla: new FormControl(null),
      cesareas: new FormControl(null),
      vidaSex: new FormControl(null),
      partos: new FormControl(null),
      fechaParto: new FormControl(null),
      cuantosParto: new FormControl(null),
      abortos: new FormControl(null),
      planifami: new FormControl(null),
      planifamitiem: new FormControl(null),
    });
    this.form.controls['cuantosParto'].disable();
    this.form.controls['fechaParto'].disable();

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
            anthereditarios: postData.anthereditarios,
            religion: postData.religion,
            tiprelsex: postData.tiprelsex,
            parejas: postData.parejas,
            calalim: postData.calalim,
            higpers: postData.higpers,
            sedentarismo: postData.sedentarismo,
            calhabit: postData.calhabit,
            perspat: postData.perspat,
            menarca: postData.menarca,
            embarazos: postData.embarazos,
            bajoPeso: postData.bajoPeso,
            edadHijos: postData.edadHijos,
            hijosMacro: postData.hijosMacro,
            ritmo: postData.ritmo,
            regla: postData.regla,
            cesareas: postData.cesareas,
            vidaSex: postData.vidaSex,
            partos: postData.partos,
            fechaParto: postData.fechaParto,
            cuantosParto: postData.cuantosParto,
            abortos: postData.abortos,
            planifami: postData.planifami,
            planifamitiem: postData.planifamitiem,
            paciente: postData.paciente,

          };
          this.form.setValue({
            anthereditarios: this.antg.anthereditarios,
            religion: this.antg.religion,
            tiprelsex: this.antg.tiprelsex,
            parejas: this.antg.parejas,
            calalim: this.antg.calalim,
            higpers: this.antg.higpers,
            sedentarismo: this.antg.sedentarismo,
            calhabit: this.antg.calhabit,
            perspat: this.antg.perspat,
            menarca: this.antg.menarca,
            embarazos: this.antg.embarazos,
            bajoPeso: this.antg.bajoPeso,
            edadHijos: this.antg.edadHijos,
            hijosMacro: this.antg.hijosMacro,
            ritmo: this.antg.ritmo,
            regla: this.antg.regla,
            cesareas: this.antg.cesareas,
            vidaSex: this.antg.vidaSex,
            partos: this.antg.partos,
            fechaParto: this.antg.fechaParto,
            cuantosParto: this.antg.cuantosParto,
            abortos: this.antg.abortos,
            planifami: this.antg.planifami,
            planifamitiem: this.antg.planifamitiem,
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

    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.antgeService.addAntG(
        this.form.value.anthereditarios,
        this.form.value.religion,
        this.form.value.tiprelsex ,
        this.form.value.parejas,
        this.form.value.calalim,
        this.form.value.higpers,
        this.form.value.sedentarismo,
        this.form.value.calhabit,
        this.form.value.perspat,
        this.form.value.menarca,
        this.form.value.embarazos,
        this.form.value.bajoPeso,
        this.form.value.edadHijos,
        this.form.value.hijosMacro,
        this.form.value.ritmo,
        this.form.value.regla,
        this.form.value.cesareas,
        this.form.value.vidaSex,
        this.form.value.partos,
        this.form.value.fechaParto,
        this.form.value.cuantosParto,
        this.form.value.abortos,
        this.form.value.planifami,
        this.form.value.planifamitiem,
        this.idsId
      );
    } else {
        console.log(this.idComponent);
        this.antgeService.updateAntG(
        this.idComponent,
        this.form.value.anthereditarios,
        this.form.value.religion,
        this.form.value.tiprelsex ,
        this.form.value.parejas,
        this.form.value.calalim,
        this.form.value.higpers,
        this.form.value.sedentarismo,
        this.form.value.calhabit,
        this.form.value.perspat,
        this.form.value.menarca,
        this.form.value.embarazos,
        this.form.value.bajoPeso,
        this.form.value.edadHijos,
        this.form.value.hijosMacro,
        this.form.value.ritmo,
        this.form.value.regla,
        this.form.value.cesareas,
        this.form.value.vidaSex,
        this.form.value.partos,
        this.form.value.fechaParto,
        this.form.value.cuantosParto,
        this.form.value.abortos,
        this.form.value.planifami,
        this.form.value.planifamitiem,
        this.idsId
      );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
