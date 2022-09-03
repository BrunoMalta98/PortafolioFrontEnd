import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  url: string ="http://localhost:8080/api/acercaDe"
  constructor(private http:HttpClient) { }



  obtenerDatosSobreMi():Observable<any> {

    
    

    return this.http.get<any>(this.url+"list");
    
    


    

  }
}
