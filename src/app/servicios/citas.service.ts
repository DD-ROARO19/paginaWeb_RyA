import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private url = 'http://localhost:3000/citas';

  constructor( private http:HttpClient ) { }

  guardar(visitante:object) { // VVVV Guardar VVVV
    return this.http.post<any>(this.url, visitante);
  }//Guardar la cita.



}
