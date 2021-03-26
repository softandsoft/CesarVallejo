import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-personal',
  templateUrl: './filtro-personal.component.html',
  styleUrls: ['./filtro-personal.component.css']
})
export class FiltroPersonalComponent implements OnInit {

  @Output()
  eventBuscar: EventEmitter<string>;

  @Output()
  eventLimpiar: EventEmitter<any>;

  constructor() {
    this.eventBuscar = new EventEmitter<string>();
    this.eventLimpiar = new EventEmitter();
  }

  ngOnInit() {
  }

  onBuscar(value: string) {
    console.log("filtrar()");
    console.log(value);


    this.eventBuscar.emit(value);
  }

  onLimpiar(nombre) {
    console.log(nombre);
    this.eventLimpiar.emit(nombre);
  }
}
