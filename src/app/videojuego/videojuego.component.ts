import { from } from 'rxjs';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

//definicion de un componente
//se le pasara un objeto JSON
@Component({
  // el selector es la etiqueta con la que llamaremos al componente.
  //el html podra asi llamar al componente las veces que se requiera
  selector: 'videojuego',
  //AQUI VA A IR LO QUE ES HTML
  templateUrl: './videojuego.component.html'
})

//Esta clase ya tendra el contenido del component
//en si es el componente en forma de clase
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  constructor() {
    this.titulo = "Componente de Videojuego";
    console.log("Se a cargado el componente: videojuego.componenr.ts");
  }


  // esto es un hook, metodo que siempre se ejecutara despues del constructor
  ngOnInit() {
    console.log("OnInit ejecutado");
  }

  //este hook se ejecuta cuando haya algun cambio en el componente o 
  //en la aplicacion de angular en general
  ngDoCheck() {
    console.log("DoCheck ejecutado");
  }

  //hook para cuando el componente es destruido o ya no se muestra
  ngOnDestroy() {
    console.log("OnDestroy ejecutado");
  }

  //funcion solo para demostrar que funciona el docheck
  cambiarTitulo() {
    this.titulo = "CAMBIOOO!!";
  }

}