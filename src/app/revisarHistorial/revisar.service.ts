import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Idents } from '../current-user.model';

@Injectable({ providedIn: 'root' })
export class RevisarService {
  private ids: Idents[] = [];
  private identsUpdated = new Subject<{ ids: Idents[]; idsCount: number }>();
  private mode;
  constructor(private http: HttpClient, private router: Router) {}

  getIds(idsPerPage: number, currentPage: number) {

    const queryParams = `?pagesize=${idsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; ids: any; maxIds: number }>(
        'http://localhost:3000/api/ident' + queryParams
      )
      .pipe(
        map(postData => {
          return {
            ids: postData.ids.map(id => {
              return {
                id: id._id,
                nombre: id.nombre,
                telefono: id.telefono
              };
            }),
            maxIds: postData.maxIds
          };
        })
      )
      .subscribe(transformedIdData => {
        this.ids = transformedIdData.ids;
        this.identsUpdated.next({
          ids: [...this.ids],
          idsCount: transformedIdData.maxIds
        });
      });
  }

  getIdsUpdateListener() {
    return this.identsUpdated.asObservable();
  }
}
