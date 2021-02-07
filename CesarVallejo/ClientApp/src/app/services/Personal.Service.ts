import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
@Injectable()
export class PersonalService {

  urlBase: string = "";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // urlBase tiene el nombre del dominio
    this.urlBase = baseUrl;
  }

  public getPersonal() {
    return this.http.get(this.urlBase + "api/Personal/listarPersonal");
  }

  public savePersonal(personal) {
    debugger
    var url = this.urlBase + "api/Personal/registrarPersonal";    

    return this.http.post(url, {
      idPersonal: parseInt(personal.idPersonal),
      apPaterno: personal.apPaterno,
      apMaterno: personal.apMaterno,
      nombre1: personal.nombre1,
      nombre2: personal.nombre2,
      fhcNac: personal.fhcNac,
      fhcIngreso: personal.fhcIngreso
    });
  }

  public getPersonalPorId(id) {
    debugger
    return this.http.get(this.urlBase + "api/Personal/obtenerPersonal/" + id);
  }

  public deletePersonal(id) {
    debugger
    return this.http.delete(this.urlBase + "api/Personal/eliminarPersonal/" + id);
  }
}


