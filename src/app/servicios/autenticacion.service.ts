import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="http://localhost:8080/api/usuario";
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log("el servicio de autenticacion esta corriendo");

    this.currentUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '()' ));

  }

  Login(credentials:any):Observable<any> {
    return this.http.post(this.url, credentials).pipe(map(data => 
      {
        return data;
    }))
  }
}
