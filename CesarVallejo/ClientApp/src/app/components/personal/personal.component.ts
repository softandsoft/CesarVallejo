import { Component, OnInit } from '@angular/core';

// importamos el servicio
import { PersonalService } from '../../services/Personal.Service' 

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personas: any;
  cabeceras: string[]=["Id","Nombre Completo","Fecha Nac","Fecha Ingreso","Acción"]
  constructor(private service: PersonalService) {

  }

  // todo lo que se pone en el ngOnInit se va a ejecutar cuando cargue la pagina
  ngOnInit(): void {
    this.service.getPersonal().subscribe(
      data => this.personas = data
    )
  }

}
