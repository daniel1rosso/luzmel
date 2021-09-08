import { TokenService } from './token.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Rol } from './roles.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[] = [];
  constructor(private _http : HttpClient , private _url : UrlService, private _tokenService: TokenService ) { }

  get(): Observable<any> {
    return this._http.get<Usuario[]>(this._url.getURLBase() + '/usuarios');
  }

  guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this._http.post<Usuario>(this._url.getURLBase() + '/nuevo', usuario);
  }

  getUsuarioLog(): Observable<Usuario> {
    // const params = new HttpParams().set("idUsuarioJugador", this.tokenService.getId());
    return this._http.get<Usuario>(this._url.getURLBase() + '/usuario/' + this._tokenService.getId());

  }

  getUsuariosComplejo(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(this._url.getURLBase() + '/usuarioscomplejo');
  }

}

// export interface Usuario{
//   idUsuario:number;
//   nombreUsuarioComplejo: string;
//   apellidoUsuarioComplejo: string;
//   emailComplejo: string;
//   nombrePilaComplejo : string;
//   contra:string;
//   roles: Set<Rol>;
// }
