import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url= environment.URL + "api/usuario/";
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log("el servicio de autenticacion esta corriendo");
    
   this.currentUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));

  }

  Login(credenciales:any):Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data => 
      {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        return data;
    }))
  }

  get UsuarioAutenticado() {

    return this.currentUserSubjet.value;
  }

  
}
