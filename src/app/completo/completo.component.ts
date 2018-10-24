import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  templateUrl: './completo.component.html',
  selector: 'app-completo',
})
export class CompletoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
