import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// esto es lo mismo que auth.service de el
export class UrlService {

  private URL: string = "http://24.232.94.111:8090";

  constructor(private httpClient : HttpClient ) { }

  getURLBase(): string {
    return this.URL;
  }
}
