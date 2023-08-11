import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrucelComponent } from './home/carrucel/carrucel.component';

import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResumenComponent } from './home/resumen/resumen.component';
import { InformacionAbogadoComponent } from './home/informacion-abogado/informacion-abogado.component';
import { AbogadosExperienciaComponent } from './home/abogados-experiencia/abogados-experiencia.component';
import { TestimoniosComponent } from './home/testimonios/testimonios.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { QuienesSomosComponent } from './AboutUS/quienes-somos/quienes-somos.component';
import { AbogadosComponent } from './AboutUS/abogados/abogados.component';
import { GenteComponent } from './AboutUS/gente/gente.component';

// SERVICIOS
import { CitasService } from './servicios/citas.service';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrucelComponent,
 
    NosotrosComponent,
    InicioComponent,
    ResumenComponent,
    InformacionAbogadoComponent,
    AbogadosExperienciaComponent,
    TestimoniosComponent,
    NoticiasComponent,
    QuienesSomosComponent,
    AbogadosComponent,
    GenteComponent,
    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CitasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
