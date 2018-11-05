import { Component, OnInit, OnDestroy   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InterService } from './interrogatorio.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { Inter } from '../modelos/interrogatorio.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR

@Component({
  selector: 'app-interrogatorio',
  templateUrl: './interrogatorio.component.html',
  styleUrls: ['./interrogatorio.component.css']
})

export class InterrogatorioComponent implements OnInit, OnDestroy {
    form: FormGroup;
    cardio_dis = false;
    otros_dis = true;
    diabetes_dis = false;
    hepatitis_dis = false;
    isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    inter: Inter;

 constructor(public interService: InterService,
  public route: ActivatedRoute, // COPIAR
  private authService: AuthService, // COPIAR

  ) {}
  enable(componente: string) {
    this.form.controls[componente].enable();
    if (componente === 'cuandoDiabetes') { this.form.controls['glucosa'].enable(); }
  }
  disable(componente: string) {
    this.form.controls[componente].disable();
    if (componente === 'cuandoDiabetes') { this.form.controls['glucosa'].disable(); }
  }


    ngOnInit() {
       // COPIAR
       this.authStatusSub = this.authService
       .getAuthStatusListener()
       .subscribe(authStatus => {
         this.isLoading = false;
       });
       // COPIAR
      this.hepatitis_dis = false;
      this.diabetes_dis = false;
      this.otros_dis = false;

      this.form = new FormGroup({
        presionArterial	: new FormControl(null, { validators: [Validators.required] }),
        fiebreReumatica	: new FormControl(null, { validators: [Validators.required] }),
        hemorragias	: new FormControl(null, { validators: [Validators.required] }),
        anemia	: new FormControl(null, { validators: [Validators.required] }),
        infarto	: new FormControl(null, { validators: [Validators.required] }),
        otros	: new FormControl(null, { validators: [Validators.required] }),
        cualesOtros	: new FormControl(null, { validators: [Validators.required] }),
        tuberculosis	: new FormControl(null, { validators: [Validators.required] }),
        neumonia	: new FormControl(null, { validators: [Validators.required] }),
        hasma	: new FormControl(null, { validators: [Validators.required] }),
        faringeamigdalitis	: new FormControl(null, { validators: [Validators.required] }),
        bronquitis	: new FormControl(null, { validators: [Validators.required] }),
        gastritis	: new FormControl(null, { validators: [Validators.required] }),
        colitis	: new FormControl(null, { validators: [Validators.required] }),
        gastroenteritis	: new FormControl(null, { validators: [Validators.required] }),
        hepatitis	: new FormControl(null, { validators: [Validators.required] }),
        cuandoHepatitis	: new FormControl(null, { validators: [Validators.required] }),
        diabetes	: new FormControl(null, { validators: [Validators.required] }),
        cuandoDiabetes	: new FormControl(null, { validators: [Validators.required] }),
        glucosa	: new FormControl(null, { validators: [Validators.required] }),
    aparatoDigestivo	: new FormControl(null, { validators: [Validators.required] }),
      });
      this.form.controls['cualesOtros'].disable();
      this.form.controls['cuandoHepatitis'].disable();
      this.form.controls['cuandoDiabetes'].disable();
      this.form.controls['glucosa'].disable();
     // COPUIAR
     this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.idsId = paramMap.get('id');
        this.isLoading = true;
        this.interService.getInter(this.idsId).subscribe(postData => {
          this.isLoading = false;
          this.idComponent = postData._id;
          this.inter = {
            id: postData._id,
            presionArterial	:postData.	 presionArterial	,
    fiebreReumatica	:postData.	    fiebreReumatica	,
    hemorragias	:postData.	    hemorragias	,
    anemia	:postData.	    anemia	,
    infarto	:postData.	    infarto	,
    otros	:postData.	    otros	,
    cualesOtros	:postData.	    cualesOtros	,
    tuberculosis	:postData.	    tuberculosis	,
    neumonia	:postData.	    neumonia	,
    hasma	:postData.	    hasma	,
    faringeamigdalitis	:postData.	    faringeamigdalitis	,
    bronquitis	:postData.bronquitis	,
    gastritis	:postData.	    gastritis	,
    colitis	:postData.	    colitis	,
    gastroenteritis	:postData.	    gastroenteritis	,
    hepatitis	:postData.	    hepatitis	,
    cuandoHepatitis	:postData.	    cuandoHepatitis	,
    diabetes	:postData.	    diabetes	,
    cuandoDiabetes	:postData.	    cuandoDiabetes	,
    glucosa	:postData.	    glucosa	,
aparatoDigestivo	:postData.	aparatoDigestivo	,

            paciente: postData.paciente,
          };
          this.form.setValue({
            presionArterial	:this.inter.	 presionArterial	,
            fiebreReumatica	:this.inter.	    fiebreReumatica	,
            hemorragias	:this.inter.	    hemorragias	,
            anemia	:this.inter.	    anemia	,
            infarto	:this.inter.	    infarto	,
            otros	:this.inter.	    otros	,
            cualesOtros	:this.inter.	    cualesOtros	,
            tuberculosis	:this.inter.	    tuberculosis	,
            neumonia	:this.inter.	    neumonia	,
            hasma	:this.inter.	    hasma	,
            faringeamigdalitis	:this.inter.	    faringeamigdalitis	,
            bronquitis	:this.inter.	    bronquitis	,
            gastritis	:this.inter.	    gastritis	,
            colitis	:this.inter.	    colitis	,
            gastroenteritis	:this.inter.	    gastroenteritis	,
            hepatitis	:this.inter.	    hepatitis	,
            cuandoHepatitis	:this.inter.	    cuandoHepatitis	,
            diabetes	:this.inter.	    diabetes	,
            cuandoDiabetes	:this.inter.	    cuandoDiabetes	,
            glucosa	:this.inter.	    glucosa	,
        aparatoDigestivo	:this.inter.	aparatoDigestivo	,

          });
        });
      } else {
        this.mode = 'create';
        this.idsId = localStorage.getItem('pacienteId');
        console.log(this.idsId);
      }
    });

    }
    addInter() {
      console.log(this.idsId);

      if (this.form.invalid) {
        return;
      }
      this.isLoading = true;
      if (this.mode === 'create') {
        this.interService.addInter(
          this.form.value. presionArterial	,
          this.form.value.	    fiebreReumatica	,
          this.form.value.	    hemorragias	,
          this.form.value.	    anemia	,
          this.form.value.	    infarto	,
          this.form.value.	    otros	,
          this.form.value.	    cualesOtros	,
          this.form.value.	    tuberculosis	,
          this.form.value.	    neumonia	,
          this.form.value.	    hasma	,
          this.form.value.	    faringeamigdalitis	,
          this.form.value.	    bronquitis	,
          this.form.value.	    gastritis	,
          this.form.value.	    colitis	,
          this.form.value.	    gastroenteritis	,
          this.form.value.	    hepatitis	,
          this.form.value.	    cuandoHepatitis	,
          this.form.value.	    diabetes	,
          this.form.value.	    cuandoDiabetes	,
          this.form.value.	    glucosa	,
          this.form.value.	aparatoDigestivo	,
          this.idsId
        );
      } else {
          console.log(this.idComponent);
          this.interService.updateInter(
          this.idComponent,
          this.form.value.	 presionArterial	,
this.form.value.	    fiebreReumatica	,
this.form.value.	    hemorragias	,
this.form.value.	    anemia	,
this.form.value.	    infarto	,
this.form.value.	    otros	,
this.form.value.	    cualesOtros	,
this.form.value.	    tuberculosis	,
this.form.value.	    neumonia	,
this.form.value.	    hasma	,
this.form.value.	    faringeamigdalitis	,
this.form.value.	    bronquitis	,
this.form.value.	    gastritis	,
this.form.value.	    colitis	,
this.form.value.	    gastroenteritis	,
this.form.value.	    hepatitis	,
this.form.value.	    cuandoHepatitis	,
this.form.value.	    diabetes	,
this.form.value.	    cuandoDiabetes	,
this.form.value.	    glucosa	,
this.form.value.	aparatoDigestivo	,
          this.idsId
        );
      }
      this.form.reset();

    }

    ngOnDestroy() {
      this.authStatusSub.unsubscribe();
    }

 }
