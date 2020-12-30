import { Component, OnInit} from '@angular/core';

//se importa desde otra carpeta la configuracion.
//la configuracion es un JSON
import {Configuracion} from './models/configuracion';
import {Cursillo} from './models/configuracion';

//_-----------------------------------------------_

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})


export class CursosComponent implements OnInit {

  public titulo_cursos: string;
  public config;
  public semestres: string[];

  //LosCursos sera de tipo arreglo y ademas tendra los atributos de
  //la clase "Cursillo"
  public LosCursos: Array<Cursillo>;

  constructor() {
    this.semestres = new Array;
    //titulo_cursos toma el valor de lo que se encuentre en la variable JSON
    this.titulo_cursos = Configuracion.titulo;
    this.config = Configuracion;

    //LosCursos utilizara los atributos de la clase Cursillo y 
    // almacenara los datos en un arreglo, cada indice del arreglo
    // es un indice que utiliza los atributos de la clase Cursillo
    this.LosCursos=[
      new Cursillo('PRECALCULO',50,'PRIMER SEMESTRE',true),
      new Cursillo('FISICA', 60, 'PRIMER SEMESTRE',false)
    ];
    
  }

    ngOnInit(){
      console.log(this.LosCursos);
      this.Semestres_Repetidos();
    }
  
  Semestres_Repetidos(){
    this.LosCursos.forEach((Cursillo, index) =>{
      this.semestres.push(Cursillo.semestre); 
      console.log(index+"este es el index"); 
    
    });
    console.log(this.semestres);
  }



}
