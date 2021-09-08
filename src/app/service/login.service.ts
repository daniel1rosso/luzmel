import { Injectable } from '@angular/core';
import {LoginUsuario} from '../models/login-usuario'
import {JwtDto} from '../models/jwt-dto'
import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient , private _url : UrlService) { }

  public  login(loginUsuario: LoginUsuario): Observable<any> {
    return this._http.post(this._url.getURLBase() + '/login', loginUsuario);
  }


}
