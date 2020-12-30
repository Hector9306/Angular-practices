export var Configuracion = {
    color: "blue",
    fondo: "#eee",
    titulo: "aplicacion de angular por herecthor",
    descripcion: "prueba de export"

};

//clase cursillos que tiene el constructor para un objeto de esta clase
export class Cursillo{
    constructor(
        public nombre: string,
        public creditos: number,
        public semestre: string,
        public cupos: boolean
    ){}

};