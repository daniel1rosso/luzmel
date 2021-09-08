import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private estados:Estado[] = [];

  constructor(private _http: HttpClient, private _url: UrlService) { }
  getEstados(): Estado[] {
    return this.estados;
  }

  getEstado(idEstado: number): Observable<any> {
    return this._http.get<Estado[]>(this._url.getURLBase() + '/estado/' + idEstado);
  }

  get(): Observable<any> {
    return this._http.get<Estado[]>(this._url.getURLBase() + '/estado');
  }

  guardarEstado(estado: any): Observable<any> {
    return this._http.post(this._url.getURLBase() + '/estado/new_estado',estado);
  }

  eliminarEstado(idEstado: any) {
    return this._http.delete(this._url.getURLBase() + '/estado/' + idEstado);
  }


  modificarEstado(estado: any, idEstado: number): Observable<any> {
    const url = this._url.getURLBase() + '/estado/' + idEstado;
    console.log(url);
    return this._http.put<any>(this._url.getURLBase() + '/estado/' + idEstado, estado);
  }


}

export interface Estado {
  idCliente: number;
  direccion: string;
  email: string;
  nombre: string;
  telefono: number;
}
