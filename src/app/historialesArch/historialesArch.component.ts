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

  isDisabled: boolean;
 
  disabletextArea(){
    this.isDisabled = true;
  }
  abletextArea(){
    if ( this.isDisabled== true){
      this.isDisabled=false;
    }
    
  }

  ngOnInit() {
    this.isDisabled = false;
  }
}