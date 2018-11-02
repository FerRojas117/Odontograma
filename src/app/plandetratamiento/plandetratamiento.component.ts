import { Component, OnInit } from '@angular/core';
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

export class PlandetratamientoComponent implements OnInit {
  form: FormGroup;
  isLoading = false; // COPIAR
    private mode = 'create'; // COPIAR
    private idsId: string; // COPIAR
    private idComponent: string;
    private authStatusSub: Subscription; // COPIAR
    private idUpdated = new Subscription;
    idIdent: string;
    plandeTratamiento: PlandeTratamiento;

  imageSource18: string;
  imageSource17: string;
  imageSource16: string;
  imageSource15: string;
  imageSource14: string;
  imageSource13: string;
  imageSource12: string;
  imageSource11: string;

  imageSource21: string;
  imageSource22: string;
  imageSource23: string;
  imageSource24: string;
  imageSource25: string;
  imageSource26: string;
  imageSource27: string;
  imageSource28: string;

  imageSource55:string;
imageSource54:string;
imageSource53:string;
imageSource52:string;
imageSource51:string;
imageSource61:string;
imageSource62:string;
imageSource63:string;
imageSource64:string;
imageSource65:string;


  constructor(public plandeTratService: PlandetratService,
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
    this. imageSource18 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource17 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource16 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource15 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource14 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource13 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource12 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource11 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource21 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource22 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource23 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource24 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource25 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource26 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource27 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource28 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
    this. imageSource55 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource54 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource53 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource52 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource51 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource61 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource62 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource63 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource64 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    this. imageSource65 =  'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
    
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
  addPlandeTratamiento(){
    console.log(this.idsId);
    this.plandeTratService.addPlandeTratamiento(
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
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.plandeTratService.addPlandeTratamiento(
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
