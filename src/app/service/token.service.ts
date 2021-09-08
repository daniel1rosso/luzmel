import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import * as $ from "jquery";
const TOKEN_KEY: string = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';
const ID_KEY = 'AuthId';
const NAME = 'AuthName';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  static getname(): string {
    throw new Error('Method not implemented.');
  }
  roles : Array<string> = [];

  constructor(private _http : HttpClient , private _url : UrlService ) { }
  public setToken(token:string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken() : string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName:string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }
  public setId(id:string): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }

  public setName(name:string): void{
    window.sessionStorage.setItem(NAME, name);
  }

  public getId(): string {
    return sessionStorage.getItem(ID_KEY);
  }

  public getUserName() : string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public getName(): string {
    return sessionStorage.getItem(NAME);
  }

  public setAuthorities(authorities:string): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, authorities);
  }

  public getAuthorities(): string{
    return sessionStorage.getItem(AUTHORITIES_KEY);
  }

  public  logOut(): void{
    this._http.post(this._url.getURLBase() + '/login/logout' ,this.getId());
    window.sessionStorage.clear();
  }
}
