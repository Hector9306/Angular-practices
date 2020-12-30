import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({ //decorador que permite configurar el modulo
  declarations: [
    AppComponent,
    
    //se agrega componente desde el archivo .ts
    //componentes creados por mi
    
    VideojuegoComponent,
    CursosComponent
    
  ],
  imports: [ //sirve para cargar modulos externos o creados por nosotros
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //sirve para cargar servicios
  bootstrap: [AppComponent] //modulo principal que se va a cargar
})
export class AppModule { }
