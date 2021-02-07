import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HijosService {

  urlBase: string = "";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // urlBase tiene el nombre del dominio
    this.urlBase = baseUrl;
  }

  public getHijosPorIdPersonal(id) {
    return this.http.get(this.urlBase + "api/Hijos/listarHijos/" + id);
  }
}


