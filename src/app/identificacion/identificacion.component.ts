import { Component, OnInit, Inject   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentService } from './identificacion.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Ident } from '../modelos/identificacion.model';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  private mode = 'create';
  private idsId: string;
  ident: Ident;
  private authStatusSub: Subscription;
  constructor(
    public identService: IdentService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit() {
      this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      nombre: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      sexo: new FormControl(null, { validators: [Validators.required] }),
      edad: new FormControl(null, { validators: [Validators.required] }),
      fechaNac: new FormControl((new Date()).toISOString(), { validators: [Validators.required] }),
      estadoCivil: new FormControl(null, { validators: [Validators.required] }),
      direccion: new FormControl(null, { validators: [Validators.required] }),
      telefono: new FormControl(null, { validators: [Validators.required] }),
      ocupacion: new FormControl(null, { validators: [Validators.required] }),
      lNacimiento: new FormControl(null, { validators: [Validators.required] }),
      procedencia: new FormControl(null, { validators: [Validators.required] }),
      estadoSocioeconomico: new FormControl(null, { validators: [Validators.required] }),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('idsId')) {
        this.mode = 'edit';
        this.idsId = paramMap.get('idsId');
        this.isLoading = true;
        this.identService.getIdent(this.idsId).subscribe(postData => {
          this.isLoading = false;
          this.ident = {
            id: postData._id,
            nombre: postData.nombre,
            sexo: postData.sexo,
            edad: postData.edad,
            fechaNac: postData.fechaNac,
            estadoCivil: postData.estadoCivil,
            direccion: postData.direccion,
            telefono: postData.telefono,
            ocupacion: postData.ocupacion,
            lugarDeNacimiento: postData.lugarDeNacimiento,
            procedencia: postData.procedencia,
            estadoSocioeconomico: postData.estadoSocioeconomico,
            creator: postData.creator
          };
          this.form.setValue({
            nombre: this.ident.nombre,
            sexo: this.ident.sexo,
            edad: this.ident.edad,
            fechaNac: this.ident.fechaNac,
            estadoCivil: this.ident.estadoCivil,
            direccion: this.ident.direccion,
            telefono: this.ident.telefono,
            ocupacion: this.ident.ocupacion,
            lNacimiento: this.ident.lugarDeNacimiento,
            procedencia: this.ident.procedencia,
            estadoSocioeconomico: this.ident.estadoSocioeconomico
          });
        });
      } else {
        this.mode = 'create';
        this.idsId = null;
      }
    });
  }

  openDialogSelf() {
    this.dialog.open(DialogAssignSelfComponent);
  }

  addIdent() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.identService.addIdent(
        this.form.value.nombre,
        this.form.value.sexo,
        this.form.value.edad,
        this.form.value.fechaNac,
        this.form.value.estadoCivil,
        this.form.value.direccion,
        this.form.value.telefono,
        this.form.value.ocupacion,
        this.form.value.lNacimiento,
        this.form.value.procedencia,
        this.form.value.estadoSocioeconomico
      );
      this.openDialogSelf();
    } else {
      this.identService.updateIdent(
        this.idsId,
        this.form.value.nombre,
        this.form.value.sexo,
        this.form.value.edad,
        this.form.value.fechaNac,
        this.form.value.estadoCivil,
        this.form.value.direccion,
        this.form.value.telefono,
        this.form.value.ocupacion,
        this.form.value.lNacimiento,
        this.form.value.procedencia,
        this.form.value.estadoSocioeconomico
      );
    }
    this.form.reset();
  }
}

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialogSelf.component.html',
})
export class DialogAssignSelfComponent implements OnInit {
  message: String;
  private messageSub: Subscription;
  constructor(
    public dialogRef: MatDialogRef<IdentService>,
    public identService: IdentService,
    @Inject(MAT_DIALOG_DATA) public data: {nombre: ''}
  ) {}

  ngOnInit() {
    this.messageSub = this.identService.getMessageUpdateListener()
    .subscribe((message: string) => {
      this.message = message;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}
