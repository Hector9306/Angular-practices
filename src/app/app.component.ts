import { Component } from '@angular/core';
import {Configuracion} from './cursos/models/configuracion';

//componente funciona gracias a un modulo que se encuentra en 'app.module.ts'
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //se define clase y sus metodos
  public title = 'aprendiendo-angular';

  public mostrar_juegos: boolean = true;
  public title2: string;

  constructor(){
  this.title2 = Configuracion.descripcion
 }

  ocultarJuegos(){
    this.mostrar_juegos = false;
  }

  mostrarJuegos(){
    this.mostrar_juegos = true;
  }

}
