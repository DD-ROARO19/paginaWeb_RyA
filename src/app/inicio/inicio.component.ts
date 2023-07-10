import { Component } from '@angular/core';
import { CitasService } from '../servicios/citas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  horas=[
    {tiempo:"2:00pm"},
    {tiempo:"4:00pm"},
    {tiempo:"6:00pm"}
  ]

  visitante={
    nombre:"",
    apellido_paterno:"",
    apellido_materno:"",
    email:"",
    telefono:"",
    fecha:"",
    hora: "",
    descripcion:""
  }

  constructor( private citaVisitante: CitasService ) {}

  testeo(){
    console.log(this.visitante);
  }

  guardarCita(){ // VVVV Guardar VVVV
    if (
      this.visitante.nombre == "",
      this.visitante.apellido_paterno == "",
      this.visitante.apellido_materno == "",
      this.visitante.email == "",
      this.visitante.telefono == "",
      this.visitante.fecha == "",
      this.visitante.hora == "",
      this.visitante.descripcion == ""
    ) {
      alert("¡Favor de llenar todos los datos!")
    }else{

      this.citaVisitante.guardar(this.visitante).subscribe(
        res=>{
          console.log(res);
          console.log("hora: "+this.visitante.hora);
          
          alert("Solicitud Enviada.");
          this.LimpiarCampos();
        },
        err=>{
          console.log(err);
          alert("¡Error al intentar enviar la solicitud!")
        }
      );

    }
  }// Guardar cita

  LimpiarCampos(){
    this.visitante.nombre = "";
    this.visitante.apellido_paterno = "";
    this.visitante.apellido_materno = "";
    this.visitante.email = "";
    this.visitante.telefono = "";
    this.visitante.fecha = "";
    this.visitante.hora = "";
    this.visitante.descripcion = "";
  }

  

}
