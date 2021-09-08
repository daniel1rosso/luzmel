import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes:Cliente[] = [];

  constructor(private _http: HttpClient, private _url: UrlService) { }
  getClientes(): Cliente[] {
    return this.clientes;
  }

  getCliente(idCliente: number): Observable<any> {
    return this._http.get<Cliente[]>(this._url.getURLBase() + '/cliente/' + idCliente);
  }

  get(): Observable<any> {
    return this._http.get<Cliente[]>(this._url.getURLBase() + '/cliente');
  }

  guardarCliente(cliente: any): Observable<any> {
    return this._http.post(this._url.getURLBase() + '/cliente/new_cliente',cliente);
  }

  eliminarCliente(idCliente: any) {
    return this._http.delete(this._url.getURLBase() + '/cliente/' + idCliente);
  }


  modificarCliente(cliente: any, idCliente: any): Observable<any> {
    const url = this._url.getURLBase() + '/cliente/' + idCliente;
    return this._http.put<any>(this._url.getURLBase() + '/cliente/' + idCliente, cliente);
  }

}

export interface Cliente {
  idCliente: number;
  direccion: string;
  email: string;
  nombre: string;
  telefono: number;
}
