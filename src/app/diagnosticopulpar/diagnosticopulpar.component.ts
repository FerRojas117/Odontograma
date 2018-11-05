import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DiagnosticoService } from './diagnosticopulpar.service';
import { ActivatedRoute, ParamMap } from '@angular/router'; // COPIAR
import { AuthService } from '../auth/auth.service'; // COPIAR
import { Subscription } from 'rxjs'; // COPIAR
import { Explo } from '../modelos/exploracionfisica.model';
import { IdentService } from '../identificacion/identificacion.service'; // COPIAR
import { Diagnostico } from '../modelos/diagnostico.model';

@Component({
  selector: 'app-diagnosticopulpar',
  templateUrl: './diagnosticopulpar.component.html',
  styleUrls: ['./diagnosticopulpar.component.css']
})
export class DiagnosticopulparComponent implements OnInit {
  form: FormGroup;
  isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    diagnostico: Diagnostico;
  constructor(
    public diagnosticoService: DiagnosticoService,
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
      organoa: new FormControl(null, {validators: [Validators.required] }),
      tipodedolor: new FormControl(null, { validators: [Validators.required] }),
      episodios: new FormControl(null, { validators: [Validators.required] }),
      percusion: new FormControl(null, { validators: [Validators.required] }),
      movilidad: new FormControl(null, { validators: [Validators.required] }),
      cambiodecolor: new FormControl(null, { validators: [Validators.required] }),
      trumefaccionintra: new FormControl(null, { validators: [Validators.required] }),
      trumefaccionextra: new FormControl(null, { validators: [Validators.required] }),
      fistula: new FormControl(null, { validators: [Validators.required] }),
      reaccionpulparfrio: new FormControl(null, { validators: [Validators.required] }),
      reaccionpulparcalor: new FormControl(null, { validators: [Validators.required] }),
      reaccionpulpartestcavit: new FormControl(null, { validators: [Validators.required] }),
      observaciones: new FormControl(null, { validators: [Validators.required] }),
      organob: new FormControl(null, { validators: [Validators.required] }),
      caries: new FormControl(null, { validators: [Validators.required] }),
      trauma: new FormControl(null, { validators: [Validators.required] }),
      enfperiodonta: new FormControl(null, { validators: [Validators.required] }),
      obtdefectuosa: new FormControl(null, { validators: [Validators.required] }),
      fracturacorona: new FormControl(null, { validators: [Validators.required] }),
      fracturaraiz: new FormControl(null, { validators: [Validators.required] }),
      otro: new FormControl(null, { validators: [Validators.required] }),
      otro2: new FormControl(null, { validators: [Validators.required] }),
      otro3: new FormControl(null, { validators: [Validators.required] }),
      organoc: new FormControl(null, { validators: [Validators.required] }),
      calcificacionescorona2: new FormControl(null, { validators: [Validators.required] }),
      calcificacionesraiz2: new FormControl(null, { validators: [Validators.required] }),
      resorcioninterno: new FormControl(null, { validators: [Validators.required] }),
      resorcionexterno: new FormControl(null, { validators: [Validators.required] }),
      rarefaccionpenapico: new FormControl(null, { validators: [Validators.required] }),
      rarefaccionradicular: new FormControl(null, { validators: [Validators.required] }),
      obturaciondefectuosa2: new FormControl(null, { validators: [Validators.required] }),
      organodentario: new FormControl(null, { validators: [Validators.required] }),
      vitalreversible: new FormControl(null, { validators: [Validators.required] }),
      vitalirreversible: new FormControl(null, { validators: [Validators.required] }),
      novitalaguda: new FormControl(null, { validators: [Validators.required] }),
      novitalcronica: new FormControl(null, { validators: [Validators.required] }),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.idsId = paramMap.get('id');
        this.isLoading = true;
        this.diagnosticoService.getDiagnostico(this.idsId).subscribe(postData => {
          this.isLoading = false;
          this.idComponent = postData._id;
          this.diagnostico = {
            id: postData._id,
            paciente: postData.paciente,
            organoa:	postData.		organoa	,
tipodedolor:	postData.		tipodedolor	,
episodios:	postData.		episodios	,
percusion:	postData.		percusion	,
movilidad:	postData.		movilidad	,
cambiodecolor:	postData.		cambiodecolor	,
trumefaccionintra:	postData.		trumefaccionintra	,
trumefaccionextra:	postData.		trumefaccionextra	,
fistula:	postData.		fistula	,
reaccionpulparcalor:	postData.		reaccionpulparcalor	,
reaccionpulparfrio:	postData.		reaccionpulparfrio	,
reacciontestcavit:	postData.		reacciontestcavit	,
observaciones:	postData.		observaciones	,
organob:	postData.		organob	,
caries:	postData.		caries	,
trauma:	postData.		trauma	,
enfperiodonta:	postData.		enfperiodonta	,
obtdefectuosa:	postData.		obtdefectuosa	,
fracturacorona:	postData.		fracturacorona	,
fracturaraiz:	postData.		fracturaraiz	,
otro:	postData.		otro	,
otro2:	postData.		otro2	,
otro3:	postData.		otro3	,
organoc:	postData.		organoc	,
calcificacionescorona2:	postData.		calcificacionescorona2	,
calcificacionesraiz2:	postData.		calcificacionesraiz2	,
resorcioninterno:	postData.		resorcioninterno	,
resorcionexterno:	postData.		resorcionexterno	,
rarefaccionpenapico:	postData.		rarefaccionpenapico	,
rarefaccionradicular:	postData.		rarefaccionradicular	,
obturaciondefectuosa2:	postData.		obturaciondefectuosa2	,
organodentario:	postData.		organodentario	,
vitalreversible:	postData.		vitalreversible	,
vitalirreversible:	postData.		vitalirreversible	,
novitalaguda:	postData.		novitalaguda	,
novitalcronica:	postData.		novitalcronica	,


          };
          this.form.setValue({
            organoa:	this.diagnostico.		organoa	,
tipodedolor:	this.diagnostico.		tipodedolor	,
episodios:	this.diagnostico.		episodios	,
percusion:	this.diagnostico.		percusion	,
movilidad:	this.diagnostico.		movilidad	,
cambiodecolor:	this.diagnostico.		cambiodecolor	,
trumefaccionintra:	this.diagnostico.	trumefaccionintra	,
trumefaccionextra:	this.diagnostico.		trumefaccionextra	,
fistula:	this.diagnostico.		fistula	,
reaccionpulparcalor:	this.diagnostico.		reaccionpulparcalor	,
reaccionpulparfrio:	this.diagnostico.		reaccionpulparfrio	,
reacciontestcavit:	this.diagnostico.		reacciontestcavit	,
observaciones:	this.diagnostico.		observaciones	,
organob:	this.diagnostico.		organob	,
caries:	this.diagnostico.		caries	,
trauma:	this.diagnostico.		trauma	,
enfperiodonta:	this.diagnostico.		enfperiodonta	,
obtdefectuosa:	this.diagnostico.		obtdefectuosa	,
fracturacorona:	this.diagnostico.		fracturacorona	,
fracturaraiz:	this.diagnostico.		fracturaraiz	,
otro:	this.diagnostico.		otro	,
otro2:	this.diagnostico.		otro2	,
otro3:	this.diagnostico.		otro3	,
organoc:	this.diagnostico.		organoc	,
calcificacionescorona2:	this.diagnostico.		calcificacionescorona2	,
calcificacionesraiz2:	this.diagnostico.		calcificacionesraiz2	,
resorcioninterno:	this.diagnostico.		resorcioninterno	,
resorcionexterno:	this.diagnostico.		resorcionexterno	,
rarefaccionpenapico:	this.diagnostico.		rarefaccionpenapico	,
rarefaccionradicular:	this.diagnostico.		rarefaccionradicular	,
obturaciondefectuosa2:	this.diagnostico.		obturaciondefectuosa2	,
organodentario:	this.diagnostico.		organodentario	,
vitalreversible:	this.diagnostico.		vitalreversible	,
vitalirreversible:	this.diagnostico.		vitalirreversible	,
novitalaguda:	this.diagnostico.		novitalaguda	,
novitalcronica:	this.diagnostico.		novitalcronica	,

          });
        });
      } else {
        this.mode = 'create';
        this.idsId = localStorage.getItem('pacienteId');
        console.log(this.idsId);
      }
    });

  }
  addDiagnostico() {
    console.log(this.idsId);

    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.diagnosticoService.addDiagnostico(
        this.form.value.		organoa	,
this.form.value.		tipodedolor	,
this.form.value.		episodios	,
this.form.value.		percusion	,
this.form.value.		movilidad	,
this.form.value.		cambiodecolor	,
this.form.value.		trumefaccionintra	,
this.form.value.		trumefaccionextra	,
this.form.value.		fistula	,
this.form.value.		reaccionpulparcalor	,
this.form.value.		reaccionpulparfrio	,
this.form.value.		reaccionpulpartestcavit	,
this.form.value.		observaciones	,
this.form.value.		organob	,
this.form.value.		caries	,
this.form.value.		trauma	,
this.form.value.		enfperiodonta	,
this.form.value.		obtdefectuosa	,
this.form.value.		fracturacorona	,
this.form.value.		fracturaraiz	,
this.form.value.		otro	,
this.form.value.		otro2	,
this.form.value.		otro3	,
this.form.value.		organoc	,
this.form.value.		calcificacionescorona2	,
this.form.value.		calcificacionesraiz2	,
this.form.value.		resorcioninterno	,
this.form.value.		resorcionexterno	,
this.form.value.		rarefaccionpenapico	,
this.form.value.		rarefaccionradicular	,
this.form.value.		obturaciondefectuosa2	,
this.form.value.		organodentario	,
this.form.value.		vitalreversible	,
this.form.value.		vitalirreversible	,
this.form.value.		novitalaguda	,
this.form.value.		novitalcronica	,

        this.idsId
      );
    } else {
        console.log(this.idComponent);
        this.diagnosticoService.updateDiagnostico(
        this.idComponent,
        this.form.value.		organoa	,
this.form.value.		tipodedolor	,
this.form.value.		episodios	,
this.form.value.		percusion	,
this.form.value.		movilidad	,
this.form.value.		cambiodecolor	,
this.form.value.		trumefaccionintra	,
this.form.value.		trumefaccionextra	,
this.form.value.		fistula	,
this.form.value.		reaccionpulparcalor	,
this.form.value.		reaccionpulparfrio	,
this.form.value.		reaccionpulpartestcavit	,
this.form.value.		observaciones	,
this.form.value.		organob	,
this.form.value.		caries	,
this.form.value.		trauma	,
this.form.value.		enfperiodonta	,
this.form.value.		obtdefectuosa	,
this.form.value.		fracturacorona	,
this.form.value.		fracturaraiz	,
this.form.value.		otro	,
this.form.value.		otro2	,
this.form.value.		otro3	,
this.form.value.		organoc	,
this.form.value.		calcificacionescorona2	,
this.form.value.		calcificacionesraiz2	,
this.form.value.		resorcioninterno	,
this.form.value.		resorcionexterno	,
this.form.value.		rarefaccionpenapico	,
this.form.value.		rarefaccionradicular	,
this.form.value.		obturaciondefectuosa2	,
this.form.value.		organodentario	,
this.form.value.		vitalreversible	,
this.form.value.		vitalirreversible	,
this.form.value.		novitalaguda	,
this.form.value.		novitalcronica	,
        this.idsId
      );
    }
    this.form.reset();

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
