import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { saveAs } from 'file-saver';
@Component({
  selector: 'exportar',
  templateUrl: 'exportar.component.html',
  styleUrls: ['exportar.component.css'],
})
export class Exportar {
   blob = new Blob(['Nombre:\nValeria\nVera Lagos\nSexo:\nF\nFecha de nacimiento:6/15/1997\nEstado\ncivil:\nSoltera\nDireccion:rionazas\nTelefono:\n7713820022\nOcupacion:Estudiante\nLugar\nde\nNacimiento:Pachuca\nProcedente\nde:\nPachuca\nEstado\nsocioeconomico:D\nPeso\n:7\nTalla:\n42\nFrecuencia\nCardiaca:\n32\nPresion\nArterial:\n36\nTemperatura:\n48/2\nFrecuencia\nRespiratoria:\nexploracion\nFísica:incorrecta\nInspeccion\nGeneral:\ncorrecta\nCabeza:\ncorrecta\nCuello:correcta\nTórax:correcta\nAbdómen:correcta\nColumna\nVertebral:correcta\nExtremidades:correcta\nDiagnostico:\ncorrecta\nObservaciones:\ncorrecta\nRecomendaciones:correcta'], { type:'Historial1.xls' });
   url = window.URL;
   
   fileUrl = this.url.createObjectURL(this.blob);
  constructor()
  {}
   
  DownloadFile()
  {
      {
      var url= window.URL.createObjectURL(this.blob);
        window.open(url);
        saveAs(this.blob, 'Historial1.xls');
      }
  }
}