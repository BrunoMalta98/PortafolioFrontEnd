

export class Experiencia {

 id? : number;
 nombreE :  string;
 puesto : string;
 descripcion : string;
 fechaInicio : string;
 fechaFin : string; 
 imgEmpresa : string;
 
 

    constructor(nombre: string, puesto: string, descripcion: string, fechaInicio: string, fechaFin: string, imgEmpresa: string){
        this.nombreE = nombre;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.fechaFin = fechaFin;
        this.fechaInicio = fechaInicio;
        this.imgEmpresa = imgEmpresa;
        
        
        
        
        
        
        
    }

}
