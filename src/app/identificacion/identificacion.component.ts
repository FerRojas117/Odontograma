import { Component, OnInit, Inject   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentService } from './identificacion.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  form: FormGroup;

  constructor(public identService: IdentService,
    public dialog: MatDialog,
    ) {}

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
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
  }

  openDialogSelf() {
    this.dialog.open(DialogAssignSelfComponent);
  }
  addIdent() {
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
  acceptAssignSelf() {
    this.dialogRef.close('true');
  }
  declineAssignSelf(): void {
    this.dialogRef.close();
  }
}
