import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RehaService } from './rehabilitacion.service';

@Component({
  selector: 'app-rehabilitacion',
  templateUrl: './rehabilitacion.component.html',
  styleUrls: ['./rehabilitacion.component.css']
})
export class RehabilitacionComponent implements OnInit {
    form: FormGroup;
    examenPara = new FormControl();
    examenParaList: string[] = ['Trauma o desarmonia oclusal',
                                'Estado de organos dentarios pilares',
                                'Estado y relacion de arcos',
                                'Irregularidades en el plano oclusal',
                                'Cierre oclusal por varias causas',
                                'Sobre mordida vertical u horizontal',
                                'Mordida cruzada',
                                'Desviacion de la linea media',
                                'Relacion del tamaño y forma entre los arcos',
                                'Espacio para remplazar dientes faltantes',
                                'Posicion dentaria en el arco',
                                'Relaciones marginales',
                                'Desgaste cuspideo y fosetas',
                                'Abrasion en cervical',
                                'Diastemas',
                                'Supernumerarios e inclusiones',
                                'Relacion corona raiz',
                                'Estado de las restaurizaciones presentes',
                                'logitud del arco',
                                'Desviaciones de la oclusion',
                                ];
  
    constructor(public rehaservice: RehaService) {}
  
    ngOnInit() {
      this.form = new FormGroup({
        referidoPor: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        motivoConsulta: new FormControl(null, { validators: [Validators.required] }),
        moEstu: new FormControl(null, { validators: [Validators.required] }),
        descripcion: new FormControl(null, { validators: [Validators.required] }),
        //estRdla: new FormControl(null, { validators: [Validators.required] }),
        //irreEepo: new FormControl(null, { validators: [Validators.required] }),
        //cieOpvc: new FormControl(null, { validators: [Validators.required] }),
        //cieOpvc: new FormControl(null, { validators: [Validators.required] }),
      });
    }
    addReha() {
      this.rehaservice.addReha(
        this.form.value.referidoPor,
        this.form.value.motivoConsulta,
        this.form.value.moEstu,
        this.form.value.descripcion,
      );
    }
  }