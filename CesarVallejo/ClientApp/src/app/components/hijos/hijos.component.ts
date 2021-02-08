import { Component, OnInit } from '@angular/core';
import { HijosService } from '../../services/Hijos.Service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.css']
})
export class HijosComponent implements OnInit {

  displayedColumns: string[] = ['idDerHab', 'nombreCompleto', 'fhcNac', 'acciones'];
  dataSource: any;

  idPersonal: string;

  constructor(private hijosService: HijosService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) {

    this.activatedRoute.params.subscribe(parametro => {
      this.idPersonal = parametro["id"];
    });
  }

  ngOnInit() {
    this.hijosService.getHijosPorIdPersonal(this.idPersonal).subscribe((data: any) => {
      this.dataSource = data;
    });
  }

  openDialog(element) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { name: element.nombreCompleto } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result) {
        //this.deleteHijo(element.idDerHab);
      }
    });
  }

}
