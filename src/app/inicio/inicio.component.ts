import { Component } from '@angular/core';
import { CitasService } from '../servicios/citas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  visitante={
    nombre:"",
    apellido_paterno:"",
    apellido_materno:"",
    email:"",
    telefono:"",
    fecha:"",
    descripcion:""
  }

  constructor( private citaVisitante: CitasService ) {}

  guardarCita(){
    if (
      this.visitante.nombre == "",
      this.visitante.apellido_paterno == "",
      this.visitante.apellido_materno == "",
      this.visitante.nombre == "",
      this.visitante.nombre == "",
      this.visitante.nombre == ""
    ) {
      
    }
  }

}
