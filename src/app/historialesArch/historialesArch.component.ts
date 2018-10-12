import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'historialesArch',
  templateUrl: 'historialesArch.component.html',
  styleUrls: ['historialesArch.component.css'],
})

export class HistorialesArch {
  toppings = new FormControl();
  cuales = new Input();
  toppingList: string[] = ['Alimentos', 'Drogas', 'Anestésicos', 'Otros','Animales', 'Comida'];
}