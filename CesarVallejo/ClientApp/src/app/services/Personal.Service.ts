import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()

export class PersonalService {

  urlBase: string = "";

  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
    // urlBase tiene el nombre del dominio
    this.urlBase = baseUrl;
  }

  public getPersonal() {
    return this.http.get(this.urlBase + "api/Personal/listaPersonal").map(res => res.json());
  }
}

