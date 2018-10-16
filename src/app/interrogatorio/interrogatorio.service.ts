import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { Inter } from '../modelos/interrogatorio.model';

@Injectable({ providedIn: 'root' })
export class InterService {
  private ident: Inter[] = [];

  constructor(private http: HttpClient) {}

  addInter(
    presionArterial	:	string,
    fiebreReumatica	:	string,
    hemorragias	:	string,
    anemia	:	string	,
    infarto	:	string	,
    otros	:	string	,
    cualesOtros: string,
    tuberculosis	:	string	,
    neumonia	:	string	,
    hasma	:	string	,
    faringeamigdalitis	:	string	,
    bronquitis	:	string	,
    gastritis	:	string	,
    colitis	:	string	,
    gastroenteritis	:	string	,
    hepatitis	:	string	,
    cuandoHepatitis	:	string	,
    diabetes	:	string,
    cuandoDiabetes	:	string	,
    glucosa	:	string	,
    
    ) {
    const registrarInter: any = {
      presionArterial	:	presionArterial	,
      fiebreReumatica	:	fiebreReumatica	,
      hemorragias	:	hemorragias	,
      anemia	:	anemia	,
      infarto	:	infarto	,
      otros	:	otros	,
      cualesOtros: cualesOtros,
      tuberculosis	:	tuberculosis	,
      neumonia	:	neumonia	,
      hasma	:	hasma	,
      faringeamigdalitis	:	faringeamigdalitis	,
      bronquitis	:	bronquitis	,
      gastritis	:	gastritis	,
      colitis	:	colitis	,
      gastroenteritis	:	gastroenteritis	,
      hepatitis	:	hepatitis	,
      cuandoHepatitis : cuandoHepatitis,
      diabetes	:	diabetes,
      cuandoDiabetes :  cuandoDiabetes,
      glucosa :  glucosa,
      
    };
     // imprimir objeto con los datos del front end
     console.log(registrarInter);
     /*
     this.http
       .post<{ _id: string }>('http://localhost:3000/api/ident', registrarIdent)
       .subscribe(responseData => {
         this.id = responseData._id;
       });
       */
   }
 
 }
 
