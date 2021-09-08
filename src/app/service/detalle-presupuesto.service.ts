import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { Producto } from './producto.service';
import { Presupuesto } from './presupuesto.service';

@Injectable({
  providedIn: 'root'
})
export class DetallePresupuestoService {
  private detallePresupuestos: DetallePresupuesto[]=[];

  constructor(
    private _http: HttpClient, private _url: UrlService
  ){}

  getDetallesPresupuestos(): DetallePresupuesto[] {
    return this.detallePresupuestos;
  }

  getDetallePresupuesto(idDetallePresupuesto: number): Observable<any> {
    return this._http.get<DetallePresupuesto[]>(this._url.getURLBase() + '/presupuesto_detalle/' + idDetallePresupuesto);
  }

  get(): Observable<any> {
    return this._http.get<Presupuesto[]>(this._url.getURLBase() + '/presupuesto_detalle');
  }

  guardarDetallePresupuesto(idPresupuesto: any, detallePresupuestos:any): Observable<any> {
      return this._http.post(this._url.getURLBase() + '/presupuesto_detalle/new_presupuesto_detalle/' + idPresupuesto, detallePresupuestos);
  }

  eliminarDetallePresupuesto(idDetallePresupuesto: number) {
    return this._http.delete(this._url.getURLBase() + '/presupuesto_detalle/' + idDetallePresupuesto);
  }

  modificarDetallePresupuesto(detallePresupuesto: any, idDetallePresupuesto: number): Observable<any> {
    const url = this._url.getURLBase() + '/presupuesto_detalle/' + idDetallePresupuesto;
    return this._http.put<any>(this._url.getURLBase() + '/presupuesto_detalle/' + idDetallePresupuesto, detallePresupuesto);
  }

  getDetallesPorPresupuesto(idPresupuesto: any): Observable<any> {
    const params = new HttpParams().set("idPresupuesto", String(idPresupuesto));
    return this._http.get<DetallePresupuesto[]>(this._url.getURLBase() + '/presupuesto_detalle/'+ idPresupuesto);
  }

}

export interface DetallePresupuesto {
  idDetallePresupuesto: number;
  cantidad: number;
  precioFinal: number;
  producto:Producto;
  presupuesto:Presupuesto;
}
