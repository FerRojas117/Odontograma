import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { saveAs } from 'file-saver';
@Component({
  selector: 'exportar',
  templateUrl: 'exportar.component.html',
  styleUrls: ['exportar.component.css'],
})
export class Exportar {
   blob = new Blob(['ayuda'], { type:'Historial.xls' });
   url = window.URL;
   
   fileUrl = this.url.createObjectURL(this.blob);
  constructor()
  {}
   
  DownloadFile()
  {
      {
      var url= window.URL.createObjectURL(this.blob);
        window.open(url);
        saveAs(this.blob, 'Historial.xls');
      }
  }
}