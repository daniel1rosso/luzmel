import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos:Producto[] = [];

  constructor(private _http: HttpClient, private _url: UrlService) { }
  getProductos(): Producto[] {
    return this.productos;
  }

  getProducto(idProducto: number): Observable<any> {
    return this._http.get<Producto[]>(this._url.getURLBase() + '/producto/' + idProducto);
  }

  get(): Observable<any> {
    return this._http.get<Producto[]>(this._url.getURLBase() + '/producto');
  }

  guardarProducto(producto: any): Observable<any> {
    return this._http.post(this._url.getURLBase() + '/producto/new_producto', producto);
  }

  eliminarProducto(idProducto: any) {
    return this._http.delete(this._url.getURLBase() + '/producto/' + idProducto);
  }


  modificarProducto(producto: any, idProducto: any): Observable<any> {
    const url = this._url.getURLBase() + '/producto/' + idProducto;
    return this._http.put<any>(this._url.getURLBase() + '/producto/' + idProducto, producto);
  }


}





export interface Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precioUnitario: number;
  cantidadProducto: number;
  disponibles: number;
  clasificacion:string;
}
