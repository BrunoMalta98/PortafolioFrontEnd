import { TestabilityRegistry } from "@angular/core";

export class Educacion {

    id? : number;
    titulacion :  string;
    institucion : string;
    descripcion : string;
    fechaInicio : string;
    fechaFin : string; 
    imgInsti : string;
    
    constructor(titulacion : string,institucion : string, descripcion : string, fechaInicio : string,fechaFin: string, imgInsti : string){

        this.titulacion = titulacion;
        this.institucion = institucion; 
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;     
        this.imgInsti = imgInsti;


    }

}
