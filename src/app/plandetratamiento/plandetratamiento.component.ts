import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PlandeTratamiento } from '../modelos/plandetratamiento.model';
import { PlandetratService } from './plandetratamiento.service';

@Component({
  selector: 'app-plandetratamiento',
  templateUrl: './plandetratamiento.component.html',
  styleUrls: ['./plandetratamiento.component.css']
})

export class PlandetratamientoComponent implements OnInit {
  form: FormGroup;
  displayText = 'show-class';
  visible = true;
  title = 'Hello!';
  color = 'pink';
  color2='red';
  bgImage ="8-square.gif";
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



  constructor(public plandeTratService: PlandetratService) { }
    examenDental = new FormControl();
    options: string[] = ['C', 'P', 'O', 'E', 'I'];
    titleClasses = {
      'red-title': true,
      'large-title': true
    }
  ngOnInit() {
    
    this.	imageSource18	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource17	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource16	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource15	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource14	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource13	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource12	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource11	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource21	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource22	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource23	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource24	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource25	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource26	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource27	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource28	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44756340_160676414884342_4149668513721614336_n.png?_nc_cat=108&_nc_ht=scontent.fmex7-1.fna&oh=6fc071888198fbbef925702e508e656e&oe=5C485CFB',
this.	imageSource55	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource54	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource53	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource52	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource51	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource61	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource62	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource63	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource64	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
this.	imageSource65	=	 'https://scontent.fmex7-1.fna.fbcdn.net/v/t1.15752-9/44723291_2199766887015118_42292298150576128_n.png?_nc_cat=100&_nc_ht=scontent.fmex7-1.fna&oh=028af10afe5d3370c841fdfc4ea65dd2&oe=5C442D21',
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
  } 
  addPlandeTratamiento(){
    this.plandeTratService.addPlandeTratamiento(
      this.form.value.trabajo,
      this.form.value.fechaTrab,
      this.form.value.profesor,
      this.form.value.cariadas,
      this.form.value.perdidas,
      this.form.value.obturadas,
      this.form.value.extracciones,
      this.form.value.indicadas,
      this.form.value.cariadastem,
      this.form.value.perdidastem,
      this.form.value.obturadastem,
      this.form.value.extraccionestem,
      this.form.value.indicadastem,
      this.form.value.nombre,
      this.form.value.cuat,
      this.form.value.equipo,
      this.form.value.sillon,
      this.form.value.nombreaux,
      this.form.value.cuataux,
      this.form.value.equipoaux,
      this.form.value.sillonaux,
    );
  }
}
