import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.service';
import { Estado } from './estado.service';
import { Producto } from './producto.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  private presupuestos:Presupuesto[] = [];

  constructor(private _http: HttpClient, private _url: UrlService) { }
  getPresupuestos(): Presupuesto[] {
    return this.presupuestos;
  }

  getPresupuesto(idPresupuesto: number): Observable<any> {
    const params = new HttpParams().set("idPresupuesto", String(idPresupuesto));
    return this._http.get<Presupuesto[]>(this._url.getURLBase() + '/presupuesto/' + idPresupuesto);
  }

  get(): Observable<any> {
    return this._http.get<Presupuesto[]>(this._url.getURLBase() + '/presupuesto');
  }

  guardarPresupuesto(presupuesto: any): Observable<any> {
    return this._http.post(this._url.getURLBase() + '/presupuesto/new_presupuesto', presupuesto);
  }

  eliminarPresupuesto(idPresupuesto: number) {
    return this._http.delete(this._url.getURLBase() + '/presupuesto/' + idPresupuesto);
  }


  modificarPresupuesto(presupuesto: any, idPresupuesto: any): Observable<any> {
    const url = this._url.getURLBase() + '/presupuesto/' + idPresupuesto;
    return this._http.put<any>(this._url.getURLBase() + '/presupuesto/' + idPresupuesto, presupuesto);
  }


}


export interface Presupuesto {
  idPresupuesto: number;
  precio:number;
  descuento:number;
  flete:number;
  descuentoEspecial:number;
  cliente: Cliente;
  estado: Estado;
  created: Date;
}

