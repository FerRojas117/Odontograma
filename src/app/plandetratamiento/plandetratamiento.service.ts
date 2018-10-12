import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlandeTratamiento } from '../modelos/plandetratamiento.model';


@Injectable({ providedIn: 'root' })
export class PlandetratService {
  private plandeTratamiento: PlandeTratamiento[] = [];

  constructor(private http: HttpClient) {}

  addPlandeTrat( 
    
    ) {
    const registrarDiagnostico: any = {
      
    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/ident', registrarDiagnostico)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
