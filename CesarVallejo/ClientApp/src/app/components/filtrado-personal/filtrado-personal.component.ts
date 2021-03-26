import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/Personal.Service';

@Component({
  selector: 'app-filtrado-personal',
  templateUrl: './filtrado-personal.component.html',
  styleUrls: ['./filtrado-personal.component.css']
})
export class FiltradoPersonalComponent implements OnInit {

  dataFiltrada: any;

  constructor(private personalService: PersonalService) { };

  ngOnInit() {
  }

  filtrarPersonalPorNombre(value) {
    if (value == "") {
      this.personalService.getPersonal().subscribe((data: any) => {
        this.dataFiltrada = data;
      });
    }
    else {
      this.personalService.GetPersonalPorName(value).subscribe((data: any) => {
        this.dataFiltrada = data;
      });
    }
  }

  limpiarFiltro(nombre) {
    nombre.value = "";

    this.personalService.getPersonal().subscribe((data: any) => {
      this.dataFiltrada = data;
    });
  }
}


