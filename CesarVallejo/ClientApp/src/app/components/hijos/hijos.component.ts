import { Component, OnInit } from '@angular/core';
import { HijosService } from '../../services/Hijos.Service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.css']
})
export class HijosComponent implements OnInit {

  hijos: any;
  cabeceras: string[] = ["Id", "Nombre Completo", "Fecha Nac", "Acciones"];
  idPersonal: string;

  constructor(private hijosService: HijosService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametro => {
      this.idPersonal = parametro["id"];
    });
  }

  ngOnInit() {
    this.hijosService.getHijosPorIdPersonal(this.idPersonal).subscribe((data: any) => {
      this.hijos = data;
    });
  }

}
