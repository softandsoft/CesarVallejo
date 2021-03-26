import { Component, OnInit, Input } from '@angular/core';
import { PersonalService } from '../../services/Personal.Service'
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  displayedColumns: string[] = ['idPersonal', 'nombreCompleto', 'fhcNac', 'fhcIngreso', 'acciones'];

  @Input()
  dataSource: any;

  constructor(private personalService: PersonalService, public dialog: MatDialog) {

  };

  ngOnInit() {
    this.personalService.getPersonal().subscribe((data: any) => {
      console.log(data);
      this.dataSource = data;
    });
  }

  openDialog(element) {
    const dialogRef = this.dialog.open(DialogComponent, { data: {name: element.nombreCompleto }});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result) {
        this.deletePersonal(element.idPersonal);
      }
    });
  }

  deletePersonal(id) {
    this.personalService.deletePersonal(id).subscribe(data => {
      this.personalService.getPersonal().subscribe((data: any) => {
        this.dataSource = data;
      });
    });
  }
}
