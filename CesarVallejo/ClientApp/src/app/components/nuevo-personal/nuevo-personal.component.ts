import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalService } from '../../services/Personal.Service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-personal',
  templateUrl: './nuevo-personal.component.html',
  styleUrls: ['./nuevo-personal.component.css']
})
export class NuevoPersonalComponent implements OnInit {

  personal: FormGroup;
  titulo: string;
  parametro: string;

  constructor(private personalService: PersonalService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.personal = new FormGroup(
      {
        'idPersonal': new FormControl("0"),
        'apPaterno': new FormControl("", [Validators.required, Validators.maxLength(50)]),
        'apMaterno': new FormControl("", [Validators.required, Validators.maxLength(50)]),
        'nombre1': new FormControl("", [Validators.required, Validators.maxLength(50)]),
        'nombre2': new FormControl("", [Validators.required, Validators.maxLength(50)]),
        'fhcNac': new FormControl("", [Validators.required]),
        'fhcIngreso': new FormControl("", [Validators.required])
      }
    );

    this.activatedRoute.params.subscribe(parametro => {
      this.parametro = parametro["id"];

      if (this.parametro == null) {
        this.titulo = "Registrar personal";
      }
      else {
        this.titulo = "Editar personal";
      }
    });
  }

  ngOnInit() {
    debugger
    if (this.parametro != null) {
      this.personalService.getPersonalPorId(this.parametro).subscribe(param => {

        //this.personal.controls["idPersonal"].setValue(param.idPersonal);
        //this.personal.controls["nombre1"].setValue(param.nombre1);
        //this.personal.controls["nombre2"].setValue(param.nombre2);
        //this.personal.controls["apPaterno"].setValue(param.apPaterno);
        //this.personal.controls["apMaterno"].setValue(param.apMaterno);
        //this.personal.controls["fhcNac"].setValue(param.fhcNac);
        //this.personal.controls["fhcIngreso"].setValue(param.fhcIngreso);
      });
    }
  }

  savePersonal() {
    if (this.personal.valid == true) {
      console.log(this.personal.value);

      this.personalService.savePersonal(this.personal.value).subscribe(data => { this.router.navigate(["/personal"]) });
    }
  }
}
