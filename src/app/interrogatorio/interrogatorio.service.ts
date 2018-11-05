import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompletoComponent } from '../completo/completo.component'; // copiar
import { Explo } from '../modelos/exploracionfisica.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; // dialog
import { Inter } from '../modelos/interrogatorio.model';

@Injectable({ providedIn: 'root' })
export class InterService {
  private ident: Inter[] = [];
  id;
  inter: Inter;
  constructor(private http: HttpClient,
    private dialog: MatDialog) {}

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
    aparatoDigestivo:string,
    paciente: string,
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
      aparatoDigestivo	:	aparatoDigestivo	,
      paciente: paciente
    };
    console.log(registrarInter);
    this.http
      .post<{ message: string }>('http://localhost:3000/api/inter', registrarInter)
      .subscribe(responseData => {
        this.dialog.open(CompletoComponent, {data: {message:  responseData.message}});
      });
  }

// ROUTER GET
  getInter(id: string) {
    console.log(id);
    return this.http.get<{
      _id: string;
      presionArterial	:string;
      fiebreReumatica	:string;
      hemorragias	:string;
      anemia	:string;
      infarto	:string;
      otros	:string;
      cualesOtros	:string;
      tuberculosis	:string;
      neumonia	:string;
      hasma	:string;
      faringeamigdalitis	:string;
      bronquitis	:string;
      gastritis	:string;
      colitis	:string;
      gastroenteritis	:string;
      hepatitis	:string;
      cuandoHepatitis	:string;
      diabetes	:string;
      cuandoDiabetes	:string;
      glucosa	:string;
  aparatoDigestivo	:string;
      paciente: string;
    }>('http://localhost:3000/api/inter/' + id);
  }

/// añadir tambien ca componente
  updateInter(
    id: string,
    presionArterial	:string,
    fiebreReumatica	:string,
    hemorragias	:string,
    anemia	:string,
    infarto	:string,
    otros	:string,
    cualesOtros	:string,
    tuberculosis	:string,
    neumonia	:string,
    hasma	:string,
    faringeamigdalitis	:string,
    bronquitis	:string,
    gastritis	:string,
    colitis	:string,
    gastroenteritis	:string,
    hepatitis	:string,
    cuandoHepatitis	:string,
    diabetes	:string,
    cuandoDiabetes	:string,
    glucosa	:string,
    aparatoDigestivo	:string,
    paciente: string,
  ) {
    let inter: Inter;
    inter = {
      id: id,
      presionArterial	:	 presionArterial	,
      fiebreReumatica	:	    fiebreReumatica	,
      hemorragias	:	    hemorragias	,
      anemia	:	    anemia	,
      infarto	:	    infarto	,
      otros	:	    otros	,
      cualesOtros	:	    cualesOtros	,
      tuberculosis	:	    tuberculosis	,
      neumonia	:	    neumonia	,
      hasma	:	    hasma	,
      faringeamigdalitis	:	    faringeamigdalitis	,
      bronquitis	:	    bronquitis	,
      gastritis	:	    gastritis	,
      colitis	:	    colitis	,
      gastroenteritis	:	    gastroenteritis	,
      hepatitis	:	    hepatitis	,
      cuandoHepatitis	:	    cuandoHepatitis	,
      diabetes	:	    diabetes	,
      cuandoDiabetes	:	    cuandoDiabetes	,
      glucosa	:	    glucosa	,
  aparatoDigestivo	:	aparatoDigestivo	,
      paciente: paciente
      };
    this.http
      .put<{ message: string }>('http://localhost:3000/api/inter/' + id, inter)
      .subscribe(response => {
        this.dialog.open(CompletoComponent, {data: {message:  response.message}});
      });
  }

}
