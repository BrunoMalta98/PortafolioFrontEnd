import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  url: string ="https://backendportfoliobruno.herokuapp.com/api/usuario"
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {


    return this.http.get<any>(this.url+"usuario");
    
    


    

  }

  
  

}