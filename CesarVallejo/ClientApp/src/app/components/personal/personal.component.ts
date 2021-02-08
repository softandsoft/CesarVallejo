import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/Personal.Service'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  displayedColumns: string[] = ['idPersonal', 'nombreCompleto', 'fhcNac', 'fhcIngreso', 'acciones'];
  dataSource: any;

  constructor(private personalService: PersonalService) { }

  ngOnInit() {
    this.personalService.getPersonal().subscribe((data: any) => {
      console.log(data);
      this.dataSource = data;
    });
  }

  deletePersonal(id) {
    if (confirm("Esta seguro de eliminar?") == true) {
      this.personalService.deletePersonal(id).subscribe(data => {
        this.personalService.getPersonal().subscribe((data: any) => {
          this.dataSource = data;
        });
      });
    }
  }
}





