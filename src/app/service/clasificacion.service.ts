import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {
  private clasificaciones:Clasificacion[] = [];

  constructor(private _http: HttpClient, private _url: UrlService) { }

  getClasificaciones(): Clasificacion[] {
    return this.clasificaciones;
  }

  getClasificacion(idClasificacion: number): Observable<any> {
    return this._http.get<Clasificacion[]>(this._url.getURLBase() + '/clasificacion/' + idClasificacion);
  }

  get(): Observable<any> {
    return this._http.get<Clasificacion[]>(this._url.getURLBase() + '/clasificacion');
  }

  guardarClasificacion(clasificacion: any): Observable<any> {
    return this._http.post(this._url.getURLBase() + '/clasificacion/new_clasificacion', clasificacion);
  }

  eliminarClasificacion(idClasificacion: any) {
    return this._http.delete(this._url.getURLBase() + '/clasificacion/' + idClasificacion);
  }

  modificarClasificacion(clasificacion: any, idClasificacion: any): Observable<any> {
    const url = this._url.getURLBase() + '/clasificacion/' + idClasificacion;
    return this._http.put<any>(this._url.getURLBase() + '/clasificacion/' + idClasificacion, clasificacion);
  }

}

export interface Clasificacion {
  idClasificacion: number;
  nombre: string;

}
